import homeReadMe from './README.md';
import componentConfig from './generatedComponentConfig';
import './packages/terra-site/src/cerner-mock-theme.scss';

const siteConfig = {
  /* The component configuration path. */
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

    themes: {
      'Default Theme': '',
      'Mock Theme': 'cerner-mock-theme',
    },
  },
};

export default siteConfig;
