/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved,no-console, compat/compat */
import intlLoaders from 'intlLoaders';
import hasIntlData from 'intl-locales-supported';

import defaultLoadIntl from '../../src/intlLoaders';

jest.mock('intlLoaders');
jest.mock('intl-locales-supported');

const supportedIntlConstructors = [
  Intl.DateTimeFormat,
  Intl.NumberFormat,
];

describe('intlLoaders', () => {
  beforeAll(() => {
    global.console.warn = jest.fn();
    hasIntlData.mockReturnValue(false);
  });

  afterAll(() => {
    global.console.warn = jest.mockReset();
    window.Intl.mockReset();
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
      hasIntlData.mockClear();
      intlLoaders['es-US'] = jest.fn();
      intlLoaders.es = jest.fn();
      intlLoaders.en = jest.fn();
    });

    it('loads locale data', () => {
      hasIntlData.mockReturnValue(false);
      defaultLoadIntl('es');
      expect(intlLoaders.es).toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(hasIntlData).toBeCalledWith(['es'], supportedIntlConstructors);
    });

    it('does not re-load locale data when it has already been loaded', () => {
      hasIntlData.mockReturnValue(true);
      defaultLoadIntl('es');
      expect(intlLoaders.es).not.toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(hasIntlData).toBeCalledWith(['es'], supportedIntlConstructors);
    });

    it('does load new locale data', () => {
      hasIntlData.mockReturnValue(false);
      defaultLoadIntl('pt');
      expect(intlLoaders.pt).toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
      expect(hasIntlData).toBeCalledWith(['pt'], supportedIntlConstructors);
    });

    it('does not re-load region locale data if regional local has already been loaded', () => {
      intlLoaders['es-US'] = undefined;
      hasIntlData.mockReturnValue(true);
      defaultLoadIntl('es-US');
      expect(hasIntlData).toHaveBeenNthCalledWith(1, ['es-US'], supportedIntlConstructors);
      expect(intlLoaders.es).not.toBeCalled();
      expect(intlLoaders.en).not.toBeCalled();
    });

    it('does not fallback locale data if fallback has already been loaded', () => {
      intlLoaders['es-US'] = undefined;
      intlLoaders.es = undefined;
      hasIntlData.mockReturnValue(false).mockReturnValueOnce(true);
      defaultLoadIntl('es-US');
      expect(hasIntlData).toHaveBeenNthCalledWith(1, ['es-US'], supportedIntlConstructors);
      expect(intlLoaders.en).not.toBeCalled();
    });
  });
});
