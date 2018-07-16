
const siteConfig = {

  themeImports: [
    '../packages/terra-legacy-theme/src/scoped-theme',
  ],

  appConfig: {

    defaultTheme: 'Default Theme',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Legacy Theme': 'terra-legacy-theme',
    },

    locales: ['ar', 'en', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fi-FI', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'],
  },
};

module.exports = siteConfig;
