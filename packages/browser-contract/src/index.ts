import { Browser } from 'mugshot';
import { expect } from 'chai';
import Jimp from 'jimp';
import fs from 'fs-extra';
import path from 'path';
import { ElementNotFound } from '../../mugshot/src/interfaces/browser';

export interface BrowserToBeAdapted {
  /**
   * Navigate to an URL.
   */
  url: (path: string) => Promise<any>;

  /**
   * Execute JS in the active page.
   *
   * @param func Should be stringified and sent to the browser.
   * @param args Should be stringified and passed to func.
   */
  execute: (func: (...args: any[]) => any, ...args: any[]) => Promise<any>;
}

export type BrowserContractTest = {
  name: string;

  /**
   * Get the test implementation that will throw an `AssertionError` on failure.
   *
   * @param browser The browser you're adapting. It will be used to navigate to
   *   a test fixture and resize the window.
   * @param adapter The browser adapter.
   */
  getTest: (browser: BrowserToBeAdapted, adapter: Browser) => () => Promise<void>;
}

/* istanbul ignore next because this will get stringified and sent to the browser */
function createFixture(html: string) {
  document.write(html);
}

async function loadFixture(browser: BrowserToBeAdapted, adapter: Browser, name: string) {
  const fixtureContent = await fs.readFile(
    // resolve will give us the location of the root index.js.
    path.join(require.resolve('@mugshot/selenium'), `../fixtures/${name}.html`),
    { encoding: 'utf8' }
  );

  await browser.url('about:blank');

  await browser.execute(createFixture, fixtureContent);

  await adapter.setViewportSize(1024, 768);
}

const browserContractTests: BrowserContractTest[] = [{
  name: 'should take a viewport screenshot',
  getTest(browser: BrowserToBeAdapted, adapter: Browser) {
    return async () => {
      await loadFixture(browser, adapter, 'simple');

      const screenshot = await Jimp.read(Buffer.from(await adapter.takeScreenshot(), 'base64'));

      expect(screenshot.getWidth()).to.equal(1024);
      expect(screenshot.getHeight()).to.equal(768);
    };
  }
}, {
  name: 'should take a viewport screenshot with absolutely positioned elements',
  getTest(browser: BrowserToBeAdapted, adapter: Browser) {
    return async () => {
      await loadFixture(browser, adapter, 'rect');

      const screenshot = await Jimp.read(Buffer.from(await adapter.takeScreenshot(), 'base64'));

      expect(screenshot.getWidth()).to.equal(1024);
      expect(screenshot.getHeight()).to.equal(768);
    };
  }
}, {
  name: 'should get bounding rect of element',
  getTest(browser: BrowserToBeAdapted, adapter: Browser) {
    return async () => {
      await loadFixture(browser, adapter, 'rect');

      const rect = await adapter.getElementRect('.test');

      // Include margin.
      expect(rect.x).to.equal(8 + 3);
      expect(rect.y).to.equal(10 + 3);

      // Include border and padding.
      expect(rect.width).to.equal(100 + 2 * 2 + 4 * 2);
      expect(rect.height).to.equal(100 + 2 * 2 + 4 * 2);
    };
  }
}, {
  name: 'should get bounding rect of off-screen element',
  getTest(browser: BrowserToBeAdapted, adapter: Browser) {
    return async () => {
      await loadFixture(browser, adapter, 'rect-scroll');

      const rect = await adapter.getElementRect('.test');

      expect(rect.x).to.equal(2000);
      expect(rect.y).to.equal(2000);
    };
  }
}, {
  name: 'should get bounding rect of missing element',
  getTest(browser: BrowserToBeAdapted, adapter: Browser) {
    return async () => {
      await loadFixture(browser, adapter, 'rect-scroll');

      let caughtError!: ElementNotFound;

      try {
        await adapter.getElementRect('.missing');
      } catch (e) {
        caughtError = e;
      }

      expect(caughtError).to.be.instanceOf(ElementNotFound);
      expect(caughtError.message).to.contain('.missing');
    };
  }
}];

export default browserContractTests;
