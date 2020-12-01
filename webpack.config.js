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
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
