/* globals spyOn */
/* eslint-disable global-require */
import fs from 'fs';
import I18nAggregatorPlugin from '../src/I18nAggregatorPlugin';
var MemoryFileSystem = require("memory-fs");

// Mock 'fs' module's writeFileSync function to prevent file creation
fs.writeFileSync = jest.fn(() => {});

describe('i18n-aggregator-plugin', () => {
  const supportedLocales = ['en', 'es', 'pt'];
  const baseDirectory = 'packages/terra-i18n-plugin/tests/fixtures';

  describe('when throwing errors when plugin options are not provided', () => {
    it('should gracefully exit if the baseDirectory is not provided', () => {
      try {
        new I18nAggregatorPlugin({
          supportedLocales,
        }).apply();
      } catch (e) {
        expect(e.message).toEqual('Please included the base directory path in the plugin options.');
      }
    });

    it('should gracefully exit if the supportedLocales is not provided', () => {
      try {
        new I18nAggregatorPlugin({
          baseDirectory,
        }).apply();
      } catch (e) {
        expect(e.message).toEqual('Please included the supported locales in the plugin options.');
      }
    });
  });

  describe('when searching directories for translation messages', () => {
    const expectedMessages = {
      'Terra.fixtures.test': 'Test...',
      'Terra.fixtures1.test': 'Test...',
      'Terra.fixtures3.test': 'Test...',
      'Terra.fixtures4.test': 'Test...',
      'Terra.fixtures2.test': 'Test...',
    };
    const outputtedFileName = [];
    const outputtedFileContent = [];
    const compiler = {
      inputFileSystem: {
        readdirSync: function(directory) {},
        readFileSync: function(file, encoding) {}
      }
    };
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
      }).apply();
    });

    it('should create tranlsation files for all supported locales', () => {
      expect(supportedLocales.length).toEqual(outputtedFileName.length);
      expect(SpyOnWriteFileSync).toHaveBeenCalledTimes(supportedLocales.length);
    });

    it('should log console warning for missing tranlsation files', () => {
      expect(consoleMessage).toContain('Translation file en.json not found for');
      expect(consoleMessage).toContain('/tests/fixtures/node_modules/fixtures2/translations');
      expect(SpyOnConsoleWarn).toHaveBeenCalled();
    });

    it('should fill the tranlsation files with the expected information for each locales', () => {
      supportedLocales.forEach((locale, index) => {
        expect(outputtedFileName[index]).toContain(`aggregated-translations/${locale}.js`);
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
