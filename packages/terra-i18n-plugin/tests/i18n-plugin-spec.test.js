/* globals spyOn */
/* eslint-disable global-require */
/* eslint no-underscore-dangle: ["error", { "allow": ["_plugins"] }] */
import fs from 'fs';
import path from 'path';
import I18nAggregatorPlugin from '../src/I18nAggregatorPlugin';

const Compiler = require('webpack/lib/Compiler');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');
const MemoryFileSystem = require('memory-fs');

function createInputFileSystem() {
  return new CachedInputFileSystem(new NodeJsInputFileSystem(), 60000);
}

function createCompiler() {
  const compiler = new Compiler();
  compiler.inputFileSystem = createInputFileSystem();
  return compiler;
}

describe('i18n-aggregator-plugin', () => {
  const supportedLocales = ['en', 'es', 'pt'];
  const baseDirectory = path.join('packages', 'terra-i18n-plugin', 'tests', 'fixtures');

  describe('when throwing errors when plugin options are not provided', () => {
    const compiler = createCompiler();

    it('should gracefully exit if the baseDirectory is not provided', () => {
      try {
        new I18nAggregatorPlugin({
          supportedLocales,
        }).apply(compiler);
      } catch (e) {
        expect(e.message).toEqual('Please include the base directory path in the plugin options.');
      }
    });

    it('should gracefully exit if the supportedLocales is not provided', () => {
      try {
        new I18nAggregatorPlugin({
          baseDirectory,
        }).apply(compiler);
      } catch (e) {
        expect(e.message).toEqual('Please include the supported locales in the plugin options.');
      }
    });
  });

  describe('when searching directories for translation message', () => {
    const expectedMessages = {
      'Terra.fixtures.test': 'Test...',
      'Terra.fixtures1.test': 'Test...',
      'Terra.fixtures3.test': 'Test...',
      'Terra.fixtures4.test': 'Test...',
      'Terra.fixtures2.test': 'Test...',
    };
    const outputtedFileName = [];
    const outputtedFileContent = [];
    const compiler = createCompiler();
    let consoleMessage;
    let SpyOnConsoleWarn;
    let SpyOnWriteFileSync;

    beforeAll(() => {
      SpyOnWriteFileSync = spyOn(fs, 'writeFileSync').and.callFake((fileName, content) => {
        outputtedFileName.push(fileName);
        outputtedFileContent.push(content);
      });
      SpyOnConsoleWarn = spyOn(console, 'warn').and.callFake((message) => {
        consoleMessage = message;
      });

      new I18nAggregatorPlugin({
        baseDirectory,
        supportedLocales,
      }).apply(compiler);
      compiler._plugins['after-environment'][0]();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(supportedLocales.length).toEqual(outputtedFileName.length);
      expect(SpyOnWriteFileSync).toHaveBeenCalledTimes(supportedLocales.length);
    });

    it('should log console warning for missing tranlsation files', () => {
      expect(consoleMessage).toContain('Translation file en.json not found for');
      expect(consoleMessage).toContain(path.join('tests', 'fixtures', 'node_modules', 'fixtures2', 'translations'));
      expect(SpyOnConsoleWarn).toHaveBeenCalled();
    });

    it('should fill the tranlsation files with the expected information for each locales', () => {
      supportedLocales.forEach((locale, index) => {
        expect(outputtedFileName[index]).toContain(path.join('aggregated-translations', `${locale}.js`));
        expect(outputtedFileContent[index]).toContain(`react-intl/locale-data/${locale}`);
        if (locale === 'en') {
          const missingTranslationMessages = Object.assign({}, expectedMessages);
          delete missingTranslationMessages['Terra.fixtures2.test'];
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(missingTranslationMessages, null, 2));
        } else {
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(expectedMessages, null, 2));
        }
        // eslint-disable-next-line no-useless-escape
        expect(outputtedFileContent[index]).toContain(`\'${locale}\'`);
      });
    });
  });

  describe('when searching with custom routers for translation message', () => {
    const expectedMessages = {
      'Terra.fixtures.test': 'Test...',
      'Terra.folder.test': 'Test...',
      'Terra.fixtures1.test': 'Test...',
      'Terra.fixtures3.test': 'Test...',
      'Terra.fixtures4.test': 'Test...',
      'Terra.fixtures2.test': 'Test...',
    };
    const outputtedFileName = [];
    const outputtedFileContent = [];
    const compiler = createCompiler();
    let consoleMessage;
    let SpyOnConsoleWarn;
    let SpyOnWriteFileSync;

    beforeAll(() => {
      SpyOnWriteFileSync = spyOn(fs, 'writeFileSync').and.callFake((fileName, content) => {
        outputtedFileName.push(fileName);
        outputtedFileContent.push(content);
      });
      SpyOnConsoleWarn = spyOn(console, 'warn').and.callFake((message) => {
        consoleMessage = message;
      });

      new I18nAggregatorPlugin({
        baseDirectory,
        supportedLocales,
        translationsDirectoryRouters: ['customFolder'],
      }).apply(compiler);
      compiler._plugins['after-environment'][0]();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(supportedLocales.length).toEqual(outputtedFileName.length);
      expect(SpyOnWriteFileSync).toHaveBeenCalledTimes(supportedLocales.length);
    });

    it('should log console warning for missing tranlsation files', () => {
      expect(consoleMessage).toContain('Translation file en.json not found for');
      expect(consoleMessage).toContain(path.join('tests', 'fixtures', 'node_modules', 'fixtures2', 'translations'));
      expect(SpyOnConsoleWarn).toHaveBeenCalled();
    });

    it('should fill the tranlsation files with the expected information for each locales', () => {
      supportedLocales.forEach((locale, index) => {
        expect(outputtedFileName[index]).toContain(path.join('aggregated-translations', `${locale}.js`));
        expect(outputtedFileContent[index]).toContain(`react-intl/locale-data/${locale}`);
        if (locale === 'en') {
          const missingTranslationMessages = Object.assign({}, expectedMessages);
          delete missingTranslationMessages['Terra.fixtures2.test'];
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(missingTranslationMessages, null, 2));
        } else {
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(expectedMessages, null, 2));
        }
        // eslint-disable-next-line no-useless-escape
        expect(outputtedFileContent[index]).toContain(`\'${locale}\'`);
      });
    });
  });

  describe('when searching specific directory for translation message', () => {
    const expectedMessages = {
      'Terra.specific.test': 'Test...',
      'Terra.fixtures.test': 'Test...',
      'Terra.fixtures1.test': 'Test...',
      'Terra.fixtures3.test': 'Test...',
      'Terra.fixtures4.test': 'Test...',
      'Terra.fixtures2.test': 'Test...',
    };
    const outputtedFileName = [];
    const outputtedFileContent = [];
    const compiler = createCompiler();
    let consoleMessage;
    let SpyOnConsoleWarn;
    let SpyOnWriteFileSync;

    beforeAll(() => {
      SpyOnWriteFileSync = spyOn(fs, 'writeFileSync').and.callFake((fileName, content) => {
        outputtedFileName.push(fileName);
        outputtedFileContent.push(content);
      });
      SpyOnConsoleWarn = spyOn(console, 'warn').and.callFake((message) => {
        consoleMessage = message;
      });

      new I18nAggregatorPlugin({
        baseDirectory,
        supportedLocales,
        translationsDirectories: ['customFolder1'],
      }).apply(compiler);
      compiler._plugins['after-environment'][0]();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(supportedLocales.length).toEqual(outputtedFileName.length);
      expect(SpyOnWriteFileSync).toHaveBeenCalledTimes(supportedLocales.length);
    });

    it('should log console warning for missing tranlsation files', () => {
      expect(consoleMessage).toContain('Translation file en.json not found for');
      expect(consoleMessage).toContain(path.join('tests', 'fixtures', 'node_modules', 'fixtures2', 'translations'));
      expect(SpyOnConsoleWarn).toHaveBeenCalled();
    });

    it('should fill the tranlsation files with the expected information for each locales', () => {
      supportedLocales.forEach((locale, index) => {
        expect(outputtedFileName[index]).toContain(path.join('aggregated-translations', `${locale}.js`));
        expect(outputtedFileContent[index]).toContain(`react-intl/locale-data/${locale}`);
        if (locale === 'en') {
          const missingTranslationMessages = Object.assign({}, expectedMessages);
          delete missingTranslationMessages['Terra.fixtures2.test'];
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(missingTranslationMessages, null, 2));
        } else {
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(expectedMessages, null, 2));
        }
        // eslint-disable-next-line no-useless-escape
        expect(outputtedFileContent[index]).toContain(`\'${locale}\'`);
      });
    });
  });

  describe('when searching directories for translation messages with options inputFileSystem given', () => {
    const compiler = createCompiler();
    const inputFileSystem = createInputFileSystem();
    const inputReadSourceDirectories = [];
    const inputReadFileSyncPaths = [];
    const inputReadFileEncondings = [];
    let SpyOnInputReadDirSync;
    let SpyOnInputReadFileSync;
    beforeAll(() => {
      SpyOnInputReadDirSync = spyOn(inputFileSystem, 'readdirSync').and.callFake((dirName) => {
        inputReadSourceDirectories.push(dirName);
      });
      SpyOnInputReadFileSync = spyOn(inputFileSystem, 'readFileSync').and.callFake((filePath, encoding) => {
        inputReadFileSyncPaths.push(filePath);
        inputReadFileEncondings.push(encoding);
      });

      new I18nAggregatorPlugin({
        baseDirectory,
        supportedLocales,
        inputFileSystem,
      }).apply(compiler);
      compiler._plugins['after-environment'][0]();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(SpyOnInputReadDirSync).toHaveBeenCalledTimes(2);
      expect(SpyOnInputReadFileSync).toHaveBeenCalledTimes(supportedLocales.length);
      expect(inputReadSourceDirectories[0]).toContain('translations');
      expect(inputReadSourceDirectories[1]).toContain('node_modules');
      supportedLocales.forEach((locale, index) => {
        expect(inputReadFileSyncPaths[index]).toContain(`${locale}.js`);
      });
      inputReadFileEncondings.forEach((encoding, index) => {
        expect(inputReadFileEncondings[index]).toContain('utf8');
      });
    });
  });

  describe('when searching directories for translation messages with options outputFileSystem given', () => {
    const expectedMessages = {
      'Terra.fixtures.test': 'Test...',
      'Terra.fixtures1.test': 'Test...',
      'Terra.fixtures3.test': 'Test...',
      'Terra.fixtures4.test': 'Test...',
      'Terra.fixtures2.test': 'Test...',
    };
    const outputtedFileName = [];
    const outputtedFileContent = [];
    const compiler = createCompiler();
    const outputFileSystem = new MemoryFileSystem();
    let consoleMessage;
    let SpyOnConsoleWarn;
    let SpyOnWriteFileSync;

    beforeAll(() => {
      SpyOnWriteFileSync = spyOn(outputFileSystem, 'writeFileSync').and.callFake((fileName, content) => {
        outputtedFileName.push(fileName);
        outputtedFileContent.push(content);
      });
      SpyOnConsoleWarn = spyOn(console, 'warn').and.callFake((message) => {
        consoleMessage = message;
      });

      new I18nAggregatorPlugin({
        baseDirectory,
        supportedLocales,
        outputFileSystem,
      }).apply(compiler);
      compiler._plugins['after-environment'][0]();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(supportedLocales.length).toEqual(outputtedFileName.length);
      expect(SpyOnWriteFileSync).toHaveBeenCalledTimes(supportedLocales.length);
    });

    it('should log console warning for missing tranlsation files', () => {
      expect(consoleMessage).toContain('Translation file en.json not found for');
      expect(consoleMessage).toContain(path.join('tests', 'fixtures', 'node_modules', 'fixtures2', 'translations'));
      expect(SpyOnConsoleWarn).toHaveBeenCalled();
    });

    it('should fill the tranlsation files with the expected information for each locales', () => {
      supportedLocales.forEach((locale, index) => {
        expect(outputtedFileName[index]).toContain(path.join('aggregated-translations', `${locale}.js`));
        expect(outputtedFileContent[index]).toContain(`react-intl/locale-data/${locale}`);
        if (locale === 'en') {
          const missingTranslationMessages = Object.assign({}, expectedMessages);
          delete missingTranslationMessages['Terra.fixtures2.test'];
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(missingTranslationMessages, null, 2));
        } else {
          expect(outputtedFileContent[index]).toMatch(JSON.stringify(expectedMessages, null, 2));
        }
        // eslint-disable-next-line no-useless-escape
        expect(outputtedFileContent[index]).toContain(`\'${locale}\'`);
      });
    });
  });
});
