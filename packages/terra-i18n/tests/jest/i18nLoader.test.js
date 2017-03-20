import i18nLoader from '../../src/i18nLoader';

describe('i18nLoader', () => {
  describe('when locale is not supported', () => {
    it('throws error', () => {
      const invalidLocale = () => i18nLoader('invalidLocale', jest.fn());

      expect(invalidLocale).toThrowErrorMatchingSnapshot();
    });
  });

  describe('when callback is not function', () => {
    it('throws error', () => {
      const invalidCallback = () => i18nLoader('en');

      expect(invalidCallback).toThrowErrorMatchingSnapshot();
    });
  });
});
