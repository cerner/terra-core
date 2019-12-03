/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved,no-console, compat/compat */
import intlLoaders from 'intlLoaders';
import defaultLoadIntl from '../../src/intlLoaders';

jest.mock('intlLoaders');

describe('intlLoaders', () => {
  beforeAll(() => {
    global.console.warn = jest.fn();
    window.Intl = {
      DateTimeFormat: {
        supportedLocalesOf: jest.fn(() => ([])),
      },
      NumberFormat: {
        supportedLocalesOf: jest.fn(() => ([])),
      },
    };
  });

  afterAll(() => {
    global.console.warn = jest.mockReset();
    window.Intl.mockReset();
  });

  beforeEach(() => {
  });

  describe('dev environment', () => {
    beforeEach(() => {
      console.warn.mockClear();
      intlLoaders['es-US'] = jest.fn();
      intlLoaders.es = jest.fn();
      intlLoaders.en = jest.fn();
    });

    it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
      intlLoaders['es-US'] = undefined;
      defaultLoadIntl('es-US');
      expect(console.warn).toBeCalledWith('Locale data was not supplied for the es-US locale. Using es data as the fallback locale data.');
      expect(intlLoaders.es).toBeCalledTimes(1);
      expect(intlLoaders.en).not.toHaveBeenCalled();
    });

    it('logs a warning when the locale is not provided and en fallback is used', () => {
      intlLoaders.es = undefined;
      defaultLoadIntl('es');
      expect(console.warn).toBeCalledWith('Locale data was not supplied for the es locale. Using en data as the fallback locale data.');
      expect(intlLoaders.en).toBeCalledTimes(1);
    });

    it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      defaultLoadIntl('es-US');
      expect(console.warn).toBeCalledWith('Locale data was not supplied for the es-US or es locales. Using en data as the fallback locale data.');
      expect(intlLoaders.en).toBeCalledTimes(1);
    });

    it('throws an error when the regional locale and en fallback are not provided', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      intlLoaders.en = undefined;
      expect(() => defaultLoadIntl('es-US')).toThrowErrorMatchingSnapshot();
    });

    it('throws an error when the locale and en fallback are not provided', () => {
      intlLoaders.es = undefined;
      intlLoaders.en = undefined;
      expect(() => defaultLoadIntl('es')).toThrowErrorMatchingSnapshot();
    });
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
      intlLoaders['es-US'] = jest.fn();
      intlLoaders.es = jest.fn();
      intlLoaders.en = jest.fn();
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('only fallbacks when the regional locale is not provided and locale fallback is used', () => {
      intlLoaders['es-US'] = undefined;
      defaultLoadIntl('es-US');
      expect(console.warn).not.toHaveBeenCalled();
      expect(intlLoaders.es).toBeCalledTimes(1);
      expect(intlLoaders.en).not.toHaveBeenCalled();
    });

    it('only fallbacks when the regional locale and locale are not provided and en fallback is used', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      defaultLoadIntl('es-US');
      expect(console.warn).not.toHaveBeenCalled();
      expect(intlLoaders.en).toBeCalledTimes(1);
    });

    it('only fallbacks when the locale is not provided and en fallback is used', () => {
      intlLoaders.es = undefined;
      defaultLoadIntl('es');
      expect(console.warn).not.toHaveBeenCalled();
      expect(intlLoaders.en).toBeCalledTimes(1);
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      intlLoaders.es = undefined;
      intlLoaders.en = undefined;
      expect(() => defaultLoadIntl('es')).toThrowErrorMatchingSnapshot();
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      intlLoaders.en = undefined;
      expect(() => defaultLoadIntl('es-US')).toThrowErrorMatchingSnapshot();
    });
  });

  describe('loads locale data as needed', () => {
    beforeEach(() => {
      Intl.DateTimeFormat.supportedLocalesOf.mockClear();
      Intl.NumberFormat.supportedLocalesOf.mockClear();
      intlLoaders['es-US'] = jest.fn();
      intlLoaders.es = jest.fn();
      intlLoaders.en = jest.fn();
    });

    it('loads locale data', () => {
      defaultLoadIntl('es');
      expect(intlLoaders.es).toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(Intl.DateTimeFormat.supportedLocalesOf).toBeCalledWith(['es'], { localeMatcher: 'lookup' });
    });

    it('does not re-load locale data when it has already been loaded', () => {
      Intl.DateTimeFormat.supportedLocalesOf.mockReturnValue(['es']);
      Intl.NumberFormat.supportedLocalesOf.mockReturnValue(['es']);
      defaultLoadIntl('es');
      expect(intlLoaders.es).not.toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(Intl.DateTimeFormat.supportedLocalesOf).toBeCalledWith(['es'], { localeMatcher: 'lookup' });
      expect(Intl.NumberFormat.supportedLocalesOf).toBeCalledWith(['es'], { localeMatcher: 'lookup' });
    });

    it('does load new locale data', () => {
      Intl.DateTimeFormat.supportedLocalesOf.mockReturnValue(['es']);
      Intl.NumberFormat.supportedLocalesOf.mockReturnValue(['es']);
      defaultLoadIntl('pt');
      expect(intlLoaders.pt).toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(Intl.DateTimeFormat.supportedLocalesOf).toBeCalledWith(['pt'], { localeMatcher: 'lookup' });
    });

    it('does not re-load region locale data if regional local has already been loaded', () => {
      intlLoaders['es-US'] = undefined;
      Intl.DateTimeFormat.supportedLocalesOf.mockReturnValue(['es']);
      Intl.NumberFormat.supportedLocalesOf.mockReturnValue(['es']);
      defaultLoadIntl('es-US');
      expect(Intl.DateTimeFormat.supportedLocalesOf).toHaveBeenNthCalledWith(1, ['es-US'], { localeMatcher: 'lookup' });
      expect(Intl.DateTimeFormat.supportedLocalesOf).toHaveBeenNthCalledWith(2, ['es'], { localeMatcher: 'lookup' });
      expect(Intl.NumberFormat.supportedLocalesOf).toHaveBeenNthCalledWith(1, ['es'], { localeMatcher: 'lookup' });
      expect(intlLoaders.es).not.toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
    });

    it('does not fallback locale data if fallback has already been loaded', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      Intl.DateTimeFormat.supportedLocalesOf.mockReturnValue(['en']);
      Intl.NumberFormat.supportedLocalesOf.mockReturnValue(['en']);
      defaultLoadIntl('es-US');
      expect(Intl.DateTimeFormat.supportedLocalesOf).toHaveBeenNthCalledWith(1, ['es-US'], { localeMatcher: 'lookup' });
      expect(Intl.DateTimeFormat.supportedLocalesOf).toHaveBeenNthCalledWith(2, ['es'], { localeMatcher: 'lookup' });
      expect(Intl.DateTimeFormat.supportedLocalesOf).toHaveBeenNthCalledWith(3, ['en'], { localeMatcher: 'lookup' });
      expect(Intl.NumberFormat.supportedLocalesOf).toHaveBeenNthCalledWith(1, ['en'], { localeMatcher: 'lookup' });
      expect(intlLoaders.en).not.toBeCalled();
    });
  });
});
