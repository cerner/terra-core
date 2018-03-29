/* globals spyOn */
/* eslint-disable import/no-extraneous-dependencies, no-console */
import translationsLoaders from 'translationsLoaders';
import loadTranslations from '../../src/translationsLoaders';

global.console = { warn: jest.fn() };

describe('translationsLoaders', () => {
  beforeEach(() => {
    console.warn.mockClear();
  });

  it('logs a warning when the regional locale is not provided and locale fallback is used', () => {
    spyOn(translationsLoaders, 'es').and.returnValue(() => ({ messages: {} }));
    loadTranslations('es-US');
    expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US locale. Using es as the fallback locale.'));
  });

  it('logs a warning when the locale is not provided and en fallback is used', () => {
    spyOn(translationsLoaders, 'en').and.returnValue(() => ({ messages: {} }));
    loadTranslations('es');
    expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es locale. Using en as the fallback locale.'));
  });

  it('logs a warning when the regional locale and locale are not provided and en fallback is used', () => {
    spyOn(translationsLoaders, 'en').and.returnValue(() => ({ messages: {} }));
    loadTranslations('es-US');
    expect(console.warn).toBeCalledWith(expect.stringContaining('Translations were not supplied for the es-US or es locales. Using en as the fallback locale.'));
  });

  it('throws an error when the locale and en fallback are not provided', () => {
    expect(() => translationsLoaders('es')).toThrowErrorMatchingSnapshot();
  });

  it('throws an error when the regional locale and en fallback are not provided', () => {
    expect(() => translationsLoaders('es-US')).toThrowErrorMatchingSnapshot();
  });

  describe('production environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('only fallsback when the regional locale is not provided and locale fallback is used', () => {
      spyOn(translationsLoaders, 'es').and.returnValue(() => ({ messages: {} }));
      loadTranslations('es-US');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('only fallsback when the locale is not provided and en fallback is used', () => {
      spyOn(translationsLoaders, 'en').and.returnValue(() => ({ messages: {} }));
      loadTranslations('es');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('only fallsback when the regional locale and locale are not provided and en fallback is used', () => {
      spyOn(translationsLoaders, 'en').and.returnValue(() => ({ messages: {} }));
      loadTranslations('es-US');
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('still throws an error when the locale and en fallback are not provided', () => {
      expect(() => translationsLoaders('es')).toThrowErrorMatchingSnapshot();
    });

    it('still throws an error when the regional locale and en fallback are not provided', () => {
      expect(() => translationsLoaders('es-US')).toThrowErrorMatchingSnapshot();
    });
  });
});
