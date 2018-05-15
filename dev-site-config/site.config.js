import homeReadMe from '../README.md';
import componentConfig from './generatedComponentConfig';
import '../packages/terra-site/src/cerner-mock-theme.scss';
import '../packages/terra-legacy-theme/src/scoped-theme';

const siteConfig = {
  /* The component configuration. */
  componentConfig,

  /* The markdown content to display on the home page. */
  readMeContent: homeReadMe,

  appConfig: {

    /* The title for the site header. */
    title: 'Terra Core',

    defaultTheme: 'Default Theme',

    /* The themes to toggle in the site. */
    themes: {
      'Default Theme': '',
      'Legacy Theme': 'terra-legacy-theme',
      'Mock Theme': 'cerner-mock-theme',
    },

    extensions: {
      gitHubUrl: 'https://github.com/cerner/terra-core',
    },
  },
};

export default siteConfig;
