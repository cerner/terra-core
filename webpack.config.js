const { merge } = require('webpack-merge');
const {
  TerraDevSite,
} = require('@cerner/terra-dev-site');

const WebpackConfigTerra = require('@cerner/webpack-config-terra');

const coreConfig = (env = {}) => ({
  plugins: [
    new TerraDevSite({
      defaultLocale: env.defaultLocale,
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8083,
  },
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv), coreConfig())
);

module.exports = mergedConfig;
