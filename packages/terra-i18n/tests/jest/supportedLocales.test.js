import locales from '../../src/i18nSupportedLocales';
import intlLoaders from '../../src/intlLoaders';
import translationLoaders from '../../src/translationLoaders';


describe('i18nSupportedLocales', () => {
  describe('intlLoaders', () => {
    locales.forEach(locale => {
      it(`has a loader for ${locale}`, () => {
        expect(intlLoaders[locale]).toBeDefined();
        expect(intlLoaders[locale]).toBeInstanceOf(Function);

      });
    });
  });
  describe('translationLoaders', () => {
    locales.forEach(locale => {
      it(`has a loader for ${locale}`, () => {
        expect(translationLoaders[locale]).toBeDefined();
        expect(translationLoaders[locale]).toBeInstanceOf(Function);
      });
    });
  });
});
