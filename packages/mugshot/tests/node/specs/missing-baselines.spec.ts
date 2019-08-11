import { afterEach, beforeEach, describe, it } from 'tdd-buffet/suite/node';
import { expect } from 'tdd-buffet/suite/expect';
import { AssertionError } from 'chai';
import Mugshot, { MugshotMissingBaselineError, MugshotResult } from '../../../src/lib/mugshot';
import PNGDiffer from '../../../src/interfaces/png-differ';
import Browser from '../../../src/interfaces/browser';
import ScreenshotStorage from '../../../src/interfaces/screenshot-storage';
import { blackPixelBuffer } from '../../../../../tests/node/fixtures';
import Screenshotter from '../../../src/interfaces/screenshotter';
import Mock from 'strong-mock';

describe('Mugshot', () => {
  describe('missing baselines', () => {
    const fs = new Mock<ScreenshotStorage>();
    const browser = new Mock<Browser>();
    const pngDiffer = new Mock<PNGDiffer>();
    const screenshotter = new Mock<Screenshotter>();

    beforeEach(() => {
      fs.reset();
      browser.reset();
      screenshotter.reset();
      pngDiffer.reset();
    });

    afterEach(() => {
      fs.verifyAll();
      browser.verifyAll();
      screenshotter.verifyAll();
      pngDiffer.verifyAll();
    });

    function setupFsWithMissingBaseline(path: string) {
      fs
        .when(f => f.pathExists(path))
        .returns(Promise.resolve(false));
    }

    async function expectIdenticalResult(
      checkCall: Promise<MugshotResult>,
      baselinePath: string,
      baseline: Buffer
    ) {
      const result = await checkCall;

      expect(result.matches).to.be.true;
      expect(result.expectedPath).to.equal(baselinePath);
      expect(result.expected).to.deep.equal(baseline);
    }

    async function expectError<E extends Error>(
      checkCall: Promise<MugshotResult>,
      expectedError: new (...args: any) => E,
      runExpectations: (error: E) => void
    ) {
      let threwExpectedError = 0;

      try {
        await checkCall;
      } catch (error) {
        if (error instanceof expectedError) {
          threwExpectedError = 1;

          runExpectations(error);
        } else {
          throw error;
        }
      }

      if (!threwExpectedError) {
        throw new AssertionError(`Expected Mugshot to throw a ${expectedError.constructor.name} error`);
      }
    }

    async function expectMissingBaselineError(
      checkCall: Promise<MugshotResult>
    ) {
      return expectError(
        checkCall,
        MugshotMissingBaselineError,
        error => {
          expect(error.message).to.contain('Missing baseline');
        }
      );
    }

    it('should fail when told to not create', async () => {
      setupFsWithMissingBaseline(
        'results/missing.png',
      );

      const mugshot = new Mugshot(browser.stub, 'results', {
        fs: fs.stub,
        pngDiffer: pngDiffer.stub,
        screenshotter: screenshotter.stub,
        createMissingBaselines: false
      });

      await expectMissingBaselineError(
        mugshot.check('missing')
      );
    });

    it('should write missing baseline and pass when told to create', async () => {
      screenshotter
        .when(s => s.takeScreenshot({}))
        .returns(Promise.resolve(blackPixelBuffer));

      setupFsWithMissingBaseline('results/missing.png',);
      fs
        .when(f => f.outputFile('results/missing.png', blackPixelBuffer))
        .returns(Promise.resolve());

      const mugshot = new Mugshot(browser.stub, 'results', {
        fs: fs.stub,
        pngDiffer: pngDiffer.stub,
        screenshotter: screenshotter.stub,
        createMissingBaselines: true
      });

      await expectIdenticalResult(
        mugshot.check('missing'),
        'results/missing.png',
        blackPixelBuffer
      );
    });

    it('should ignore an element when told to create', async () => {
      setupFsWithMissingBaseline(
        'results/ignore.png'
      );
      fs
        .when(f => f.outputFile('results/ignore.png', blackPixelBuffer))
        .returns(Promise.resolve());

      screenshotter
        .when(s => s.takeScreenshot({ ignore: '.ignore' }))
        .returns(Promise.resolve(blackPixelBuffer));

      const mugshot = new Mugshot(browser.stub, 'results', {
        fs: fs.stub,
        pngDiffer: pngDiffer.stub,
        screenshotter: screenshotter.stub,
        createMissingBaselines: true
      });

      await expectIdenticalResult(
        mugshot.check('ignore', { ignore: '.ignore' }),
        'results/ignore.png',
        blackPixelBuffer
      );
    });

    it('should screenshot only an element when told to create', async () => {
      setupFsWithMissingBaseline(
        'results/element.png'
      );
      fs
        .when(f => f.outputFile('results/element.png', blackPixelBuffer))
        .returns(Promise.resolve());

      screenshotter
        .when(s => s.takeScreenshot('.element', {}))
        .returns(Promise.resolve(blackPixelBuffer));

      const mugshot = new Mugshot(browser.stub, 'results', {
        fs: fs.stub,
        pngDiffer: pngDiffer.stub,
        screenshotter: screenshotter.stub,
        createMissingBaselines: true
      });

      await expectIdenticalResult(
        mugshot.check('element', '.element'),
        'results/element.png',
        blackPixelBuffer
      );
    });

    it('should write missing baseline and pass when told to update', async () => {
      screenshotter
        .when(s => s.takeScreenshot({}))
        .returns(Promise.resolve(blackPixelBuffer));

      setupFsWithMissingBaseline('results/missing.png',);
      fs
        .when(f => f.outputFile('results/missing.png', blackPixelBuffer))
        .returns(Promise.resolve());

      const mugshot = new Mugshot(browser.stub, 'results', {
        fs: fs.stub,
        pngDiffer: pngDiffer.stub,
        screenshotter: screenshotter.stub,
        createMissingBaselines: false,
        updateBaselines: true
      });

      await expectIdenticalResult(
        mugshot.check('missing'),
        'results/missing.png',
        blackPixelBuffer
      );
    });
  });
});
