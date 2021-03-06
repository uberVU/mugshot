import { mkdtemp, readFile, writeFile, pathExists } from 'fs-extra';
import path from 'path';
import { blackPixelBuffer, whitePixelBuffer } from '../fixtures';
import { FsStorage } from '../../../src/lib/fs-storage';

describe('FileStorage', () => {
  let tmpPath!: string;

  beforeEach(async () => {
    tmpPath = await mkdtemp('/tmp/mugshot');
  });

  it('should return an existing screenshot', async () => {
    const filePath = path.join(tmpPath, 'existing.png');
    await writeFile(filePath, blackPixelBuffer);

    const storage = new FsStorage(tmpPath);
    expect(await storage.read('existing')).toEqual(blackPixelBuffer);
  });

  it('should ask if a screenshot exists', async () => {
    const existingPath = path.join(tmpPath, 'existing.png');
    await writeFile(existingPath, blackPixelBuffer);

    const storage = new FsStorage(tmpPath);

    expect(await storage.exists('existing')).toBeTruthy();
    expect(await storage.exists('missing')).toBeFalsy();
  });

  it('should write a new screenshot', async () => {
    const filePath = path.join(tmpPath, 'new.png');

    const storage = new FsStorage(tmpPath);

    await storage.write('new', blackPixelBuffer);
    expect(await readFile(filePath)).toEqual(blackPixelBuffer);
  });

  it('should create the parent folder structure', async () => {
    const deepPath = path.join(tmpPath, 'foo', 'bar', 'baz');
    const filePath = path.join(deepPath, 'new.png');

    const storage = new FsStorage(deepPath);

    await storage.write('new', blackPixelBuffer);
    expect(await readFile(filePath)).toEqual(blackPixelBuffer);
  });

  it('should update an existing screenshot', async () => {
    const filePath = path.join(tmpPath, 'update.png');
    await writeFile(filePath, blackPixelBuffer);

    const storage = new FsStorage(tmpPath);
    await storage.write('update', whitePixelBuffer);

    expect(await readFile(filePath)).toEqual(whitePixelBuffer);
  });

  it('should delete an existing screenshot', async () => {
    const filePath = path.join(tmpPath, 'delete.png');
    await writeFile(filePath, blackPixelBuffer);

    const storage = new FsStorage(tmpPath);
    await storage.delete('delete');

    expect(await pathExists(filePath)).toBeFalsy();
  });

  it('should delete an non existing screenshot', async () => {
    const filePath = path.join(tmpPath, 'missing.png');

    const storage = new FsStorage(tmpPath);
    await storage.delete('missing');

    expect(await pathExists(filePath)).toBeFalsy();
  });
});
