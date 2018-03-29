import homeReadMe from './README.md';
import componentConfig from './generatedComponentConfig';
import './packages/terra-site/src/cerner-mock-theme.scss';

const siteConfig = {
  /* The component configuration. */
  componentConfig,

  /* The logo to display as the placeholder. */
  placeholderSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

  /* The markdown content to display on the home page. */
  readMeContent: homeReadMe,

  appConfig: {
    /* The logo for the site header. */
    logoSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

    /* The title for the site header. */
    title: 'Terra Core',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Mock Theme': 'cerner-mock-theme',
    },

    extensions: {
      gitHubUrl: 'https://github.com/cerner/terra-core',
    },
  },
};

export default siteConfig;
