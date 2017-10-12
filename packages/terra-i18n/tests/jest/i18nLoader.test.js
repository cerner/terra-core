import i18nLoader from '../../src/i18nLoader';

describe('i18nLoader', () => {
  describe('when locale is not supported', () => {
    it('throws error', () => {
      return expect(i18nLoader('invalidLocale')).rejects.toEqual('invalidLocale is not supported, supported locales: ar,en,en-US,en-GB,es,es-US,es-ES,de,fi-FI,fr,fr-FR,pt,pt-BR');
    });
  });
});
