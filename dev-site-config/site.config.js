
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
  },

  filterSideMenu: true,
};

module.exports = siteConfig;
