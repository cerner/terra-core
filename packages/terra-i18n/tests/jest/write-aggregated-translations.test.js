/* globals spyOn */
const fs = require('fs');
const path = require('path');
const MemoryFileSystem = require('memory-fs');
const writeAggregatedTranslations = require('../../scripts/aggregate-translations/write-aggregated-translations');

global.console = { warn: jest.fn() };

const defaultMessages = { en: {}, es: {} };
const locales = ['en', 'es'];
const memoryFS = new MemoryFileSystem();
const testFileSystems = { fs, memoryFS };

Object.keys(testFileSystems).forEach((testFS) => {
  describe(`write aggregated translations for ${testFS} fileSystem`, () => {
    const fileSystem = testFileSystems[testFS];
    const outputDir = '/aggregated-translations';
    let writtenFiles;
    let makeDirSpy;
    beforeEach(() => {
      writtenFiles = [];
      spyOn(fileSystem, 'writeFileSync').and.callFake((fileName, hash) => {
        writtenFiles.push(fileName);
        return hash;
      });

      const spyFunction = fileSystem === fs ? 'mkdirSync' : 'mkdirpSync';
      makeDirSpy = spyOn(fileSystem, spyFunction).and.callFake(fileName => fileName);
    });

    it('writes translations files', () => {
      const outputFiles = [
        path.resolve(process.cwd(), outputDir, 'en.js'),
        path.resolve(process.cwd(), outputDir, 'es.js'),
      ];

      writeAggregatedTranslations(defaultMessages, locales, fileSystem, outputDir);
      expect(writtenFiles).toEqual(outputFiles);
    });

    it('thows an error if a locale was not aggregated on', () => {
      const errorRegex = /Translations aggregated for es locale, but messages were not loaded correctly./;
      expect(() => writeAggregatedTranslations({ en: {} }, locales, fileSystem, outputDir)).toThrowError(errorRegex);
    });

    it('logs a warning message if a locale is not a terra-supported locale', () => {
      writeAggregatedTranslations({ cy: {} }, ['cy'], fileSystem, outputDir);

      // eslint-disable-next-line no-console
      expect(console.warn).toBeCalledWith(expect.stringContaining('WARNING: cy is NOT a Terra supported locale. Creating an aggregate translation file for cy, but'));
    });

    it('writes a translation file for a non-terra-supported locale', () => {
      const outputFiles = [
        path.resolve(process.cwd(), outputDir, 'cy.js'),
      ];

      writeAggregatedTranslations({ cy: {} }, ['cy'], fileSystem, outputDir);
      expect(makeDirSpy).toHaveBeenCalledWith(outputDir);
      expect(writtenFiles).toEqual(outputFiles);
    });

    it('creates nested directories if needed', () => {
      const nestedOutputDir = './nested/translations/output';
      const outputFiles = [
        path.resolve(process.cwd(), nestedOutputDir, 'en.js'),
        path.resolve(process.cwd(), nestedOutputDir, 'es.js'),
      ];

      writeAggregatedTranslations(defaultMessages, locales, fileSystem, nestedOutputDir);

      expect(makeDirSpy).toHaveBeenCalledWith(nestedOutputDir);
      expect(writtenFiles).toEqual(outputFiles);
    });
  });
});
