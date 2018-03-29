/* eslint-disable no-console */
import i18nLoader from '../../src/i18nLoader';

global.console = { warn: jest.fn() };

describe('i18nLoader', () => {
  beforeEach(() => {
    console.warn.mockClear();
  });

  describe('permitParams', () => {
    it('logs a warning message when locale is not supported', () => {
      expect(() => i18nLoader('cy', jest.fn())).toThrowError();

      expect(console.warn).toBeCalledWith(expect.stringContaining('cy is not a supported locale, supported locales include:'));
    });

    it('throws error when callback is not function', () => {
      const invalidCallback = () => i18nLoader('en');

      expect(invalidCallback).toThrowErrorMatchingSnapshot();
    });
  });

  describe('permitParams - prod environment', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    afterEach(() => {
      delete process.env.NODE_ENV;
    });

    it('does not log a warning message when locale is not supported', () => {
      expect(() => i18nLoader('cy', jest.fn())).toThrowError();

      expect(console.warn).not.toHaveBeenCalled();
    });

    it('still throws error when callback is not function', () => {
      const invalidCallback = () => i18nLoader('en');

      expect(invalidCallback).toThrowErrorMatchingSnapshot();
    });
  });
});
