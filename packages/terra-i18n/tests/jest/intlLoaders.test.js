/* globals spyOn */
/* eslint-disable import/no-extraneous-dependencies, no-console */
import intlLoaders from 'intlLoaders';
import loadIntl from '../../src/intlLoaders';

global.console = { warn: jest.fn() };

describe('intlLoaders', () => {
  beforeEach(() => {
    console.warn.mockClear();
  });

  it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
    spyOn(intlLoaders, 'es').and.returnValue(() => ({ messages: {} }));
    loadIntl('es-US');
    expect(console.warn).toBeCalledWith('Locale data was not supplied for the es-US locale. Using es data as the fallback locale data.');
  });

  it('logs a warning when the locale is not provided and en fallback is used', () => {
    spyOn(intlLoaders, 'en').and.returnValue(() => ({ messages: {} }));
    loadIntl('es');
    expect(console.warn).toBeCalledWith('Locale data was not supplied for the es locale. Using en data as the fallback locale data.');
  });

  it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
    spyOn(intlLoaders, 'en').and.returnValue(() => ({ messages: {} }));
    loadIntl('es-US');
    expect(console.warn).toBeCalledWith('Locale data was not supplied for the es-US or es locales. Using en data as the fallback locale data.');
  });

  it('throws an error when the locale and en fallback are not provided', () => {
    expect(() => loadIntl('es')).toThrowErrorMatchingSnapshot();
  });

  it('throws an error when the regional locale and en fallback are not provided', () => {
    expect(() => loadIntl('es-US')).toThrowErrorMatchingSnapshot();
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('only fallbacks when the regional locale is not provided and locale fallback is used', () => {
      spyOn(intlLoaders, 'es').and.returnValue(() => ({ messages: {} }));
      loadIntl('es-US');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('only fallbacks when the regional locale is not provided and locale fallback is used', () => {
      spyOn(intlLoaders, 'es').and.returnValue(() => ({ messages: {} }));
      loadIntl('es-US');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('only fallbacks when the locale is not provided and en fallback is used', () => {
      spyOn(intlLoaders, 'en').and.returnValue(() => ({ messages: {} }));
      loadIntl('es');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('only fallbacks when the regional locale and locale are not provided and en fallback is used', () => {
      spyOn(intlLoaders, 'en').and.returnValue(() => ({ messages: {} }));
      loadIntl('es-US');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      expect(() => loadIntl('es')).toThrowErrorMatchingSnapshot();
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      expect(() => loadIntl('es-US')).toThrowErrorMatchingSnapshot();
    });
  });
});
