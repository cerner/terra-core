/* globals spyOn */
/* eslint-disable global-require */
import I18nAggregatorPlugin from '../src/I18nAggregatorPlugin';

const Compiler = require('webpack/lib/Compiler');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');
const NodeOutputFileSystem = require('webpack/lib/node/NodeOutputFileSystem');

function createCompiler() {
  const compiler = new Compiler();
  compiler.inputFileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), 60000);
  compiler.outputFileSystem = new NodeOutputFileSystem();
  return compiler;
}

describe('i18n-aggregator-plugin', () => {
  const supportedLocales = ['en', 'es', 'pt'];
  const baseDirectory = 'packages/terra-i18n-plugin/tests/fixtures';

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
    const compiler = createCompiler();
    let consoleMessage;
    let SpyOnConsoleWarn;
    let SpyOnWriteFile;

    beforeAll(() => {
      SpyOnWriteFile = spyOn(compiler.outputFileSystem, 'writeFile').and.callFake((fileName, content) => {
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
      expect(SpyOnWriteFile).toHaveBeenCalledTimes(supportedLocales.length);
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
