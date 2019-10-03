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
      global.Intl = {};
      i18nLoader('en', jest.fn());
    });
    afterAll(() => { global.Intl = undefined; });

    it('it does not adds the intl polyfill ', () => {
      expect(global.IntlPolyfill).not.toBeDefined();
    });

    it('it does not load intl data', () => {
      expect(defaultLoadIntl).not.toHaveBeenCalled();
    });
  });

  describe('when intl is not defined', () => {
    beforeAll(() => {
      global.Intl = undefined;
      i18nLoader('en', jest.fn());
    });
    afterAll(() => { global.Intl = undefined; });

    it('it adds the intl polyfill ', () => {
      // expect('intl').toHaveBeenCalled();
      expect(global.Intl).toBeDefined();
      expect(global.IntlPolyfill).toBeDefined();
    });

    it('it loads the locale data ', () => {
      expect(defaultLoadIntl).toHaveBeenCalled();
    });
  });

  it('loads translations', () => {
    i18nLoader('en', jest.fn());
    expect(loadTranslations).toHaveBeenCalled();
  });
});
