/* globals spyOn */
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const MemoryFileSystem = require('memory-fs');
const i18nSupportedLocales = require('../../src/i18nSupportedLocales');
const aggregateTranslations = require('../../scripts/aggregate-translations/aggregate-translations');

global.console = { warn: jest.fn() };
const defaultSearchPatterns = [
  expect.stringContaining('translations'),
  expect.stringContaining(`node_modules${path.sep}terra-*${path.sep}translations`),
  expect.stringContaining(`packages${path.sep}terra-*${path.sep}translations`),
  expect.stringContaining(`packages${path.sep}terra-*${path.sep}node_modules${path.sep}terra-*${path.sep}translations`),
];

describe('aggregate-translations', () => {
  let searchedDirectories;
  let writtenFilePaths;
  let fsSpy;
  let globSpy;
  beforeEach(() => {
    searchedDirectories = [];
    writtenFilePaths = [];
    globSpy = spyOn(glob, 'sync').and.callFake((fileName) => {
      searchedDirectories.push(fileName); return fileName;
    });
    fsSpy = spyOn(fs, 'writeFileSync').and.callFake((fileName) => {
      writtenFilePaths.push(fileName);
    });

    spyOn(fs, 'mkdirSync');
  });

  it('aggregates on the default search patterns', () => {
    aggregateTranslations();

    expect(globSpy).toHaveBeenCalledTimes(4);
    expect(searchedDirectories).toEqual(expect.arrayContaining(defaultSearchPatterns));
  });

  it('aggregates on the default search patterns and custom directory patterns', () => {
    defaultSearchPatterns.push(expect.stringContaining(`test${path.sep}*${path.sep}pattern`));

    aggregateTranslations({ directories: './test/*/pattern' });

    expect(globSpy).toHaveBeenCalledTimes(5);
    expect(searchedDirectories).toEqual(defaultSearchPatterns);
  });

  it('uses the fs fileSystem by default', () => {
    aggregateTranslations();

    expect(fsSpy).toHaveBeenCalled();
  });

  it('uses the specified fileSystem', () => {
    const memoryFS = new MemoryFileSystem();
    const memoryFsSpy = spyOn(memoryFS, 'writeFileSync');
    spyOn(memoryFS, 'mkdirpSync');

    aggregateTranslations({ fileSystem: memoryFS });

    expect(memoryFsSpy).toHaveBeenCalled();
  });

  it('aggregates on the terra-supported locales by defualt', () => {
    const translationsFiles = [];
    i18nSupportedLocales.forEach(locale =>
      translationsFiles.push(
        expect.stringContaining(`aggregated-translations${path.sep}${locale}.js`,
      ),
    ));

    aggregateTranslations();

    expect(writtenFilePaths).toEqual(expect.arrayContaining(translationsFiles));
    const numSupportedLocales = i18nSupportedLocales.length;
    expect(writtenFilePaths.length).toEqual(numSupportedLocales + 2);
  });

  it('aggregates on the specfied locales', () => {
    const translationsFiles = [
      expect.stringContaining(`aggregated-translations${path.sep}en.js`),
    ];

    aggregateTranslations({ locales: ['en'] });

    expect(writtenFilePaths).toEqual(expect.arrayContaining(translationsFiles));
    expect(writtenFilePaths.length).toEqual(3);
  });

  it('always aggregates on en locale even if not specfied', () => {
    const translationsFiles = [
      expect.stringContaining(`aggregated-translations${path.sep}en.js`),
      expect.stringContaining(`aggregated-translations${path.sep}es.js`),
    ];

    aggregateTranslations({ locales: ['es'] });

    expect(writtenFilePaths).toEqual(expect.arrayContaining(translationsFiles));
    expect(writtenFilePaths.length).toEqual(4);
  });

  it('writes the intl and tranlsations loaders', () => {
    const loaderFiles = [
      expect.stringContaining(`aggregated-translations${path.sep}intlLoaders.js`),
      expect.stringContaining(`aggregated-translations${path.sep}translationsLoaders.js`),
    ];

    aggregateTranslations();

    expect(writtenFilePaths).toEqual(expect.arrayContaining(loaderFiles));
    const numSupportedLocales = i18nSupportedLocales.length;
    expect(writtenFilePaths.length).toEqual(numSupportedLocales + 2);
  });

  it('writes to the default output directory', () => {
    const expectedOutputDir = expect.stringContaining('aggregated-translations');

    aggregateTranslations();

    expect(writtenFilePaths).toEqual(expect.arrayContaining([expectedOutputDir]));
  });

  it('writes to the provided output directory', () => {
    const expectedOutputDir = expect.stringContaining(`translations${path.sep}folder`);

    aggregateTranslations({ outputDir: './translations/folder' });

    expect(writtenFilePaths).toEqual(expect.arrayContaining([expectedOutputDir]));
  });
});
