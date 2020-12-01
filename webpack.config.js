const path = require('path');
const merge = require('webpack-merge');
const {
  TerraDevSite,
  TerraDevSiteEntrypoints,
} = require('@cerner/terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const coreConfig = (env = {}) => ({
  entry: TerraDevSiteEntrypoints,
  plugins: [
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
      primaryNavigationItems: [{
        path: '/home',
        label: 'Home',
        contentExtension: 'home',
        additionalContent: [
          {
            title: 'Home',
            filePath: path.resolve(process.cwd(), 'README.md'),
          },
        ],
      }, {
        path: '/components',
        label: 'Components',
        contentExtension: 'doc',
      }, {
        path: '/dev_tools',
        label: 'Developer Tools',
        contentExtension: 'tool',
      }, {
        path: '/tests',
        label: 'Tests',
        contentExtension: 'test',
      }],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
