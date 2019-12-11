/* eslint-disable no-console, import/no-unresolved */
import i18nLoader from '../../src/i18nLoader';
import defaultLoadIntl from '../../src/intlLoaders';
import loadTranslations from '../../src/translationsLoaders';

jest.mock('../../src/intlLoaders');
jest.mock('../../src/translationsLoaders');

global.console.warn = jest.fn();

describe('i18nLoader', () => {
  beforeEach(() => {
    console.warn.mockClear();
  });

  describe('permitParams', () => {
    it('throws error when callback is not function', () => {
      const invalidCallback = () => i18nLoader('en');

      expect(invalidCallback).toThrowErrorMatchingSnapshot();
    });
  });

  describe('when intl is provided by browser', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      global.Intl = {};
      i18nLoader('en', jest.fn());
    });
    afterAll(() => { global.Intl = undefined; });

    it('does not adds the intl polyfill ', () => {
      expect(global.IntlPolyfill).not.toBeDefined();
    });

    it('does not load intl data', () => {
      expect(defaultLoadIntl).not.toHaveBeenCalled();
    });
  });

  describe('when intl is not defined', () => {
    beforeAll(() => {
      defaultLoadIntl.mockClear();
      loadTranslations.mockClear();
      global.Intl = undefined;
    });
    afterAll(() => { global.Intl = undefined; });

    it('loads en locale', () => {
      i18nLoader('en', jest.fn());
    });

    it('adds the intl polyfill', () => {
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(1, 'en');
    });

    it('loads translations', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(1, 'en', expect.anything(), undefined);
    });

    it('loads es locale', () => {
      i18nLoader('es', jest.fn());
    });

    it('loads the new locale data on sequential load ', () => {
      expect(defaultLoadIntl).toHaveBeenNthCalledWith(2, 'es');
    });

    it('loads the new translation data on sequential load ', () => {
      expect(loadTranslations).toHaveBeenNthCalledWith(2, 'es', expect.anything(), undefined);
    });
  });
});
