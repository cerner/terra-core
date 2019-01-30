const path = require('path');
const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');

const coreConfig = () => {
  const processPath = process.cwd();
  const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

  const momentAlias = path.resolve(path.join(rootPath, 'packages', 'terra-date-picker', 'node_modules', 'moment'));

  const i18nAlias = path.resolve(path.join(rootPath, 'packages', 'terra-i18n'));
  return {
    resolve: {
      alias: {
        moment: momentAlias,
        'terra-i18n': i18nAlias,
      },
    },
  };
};

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), coreConfig())
);

module.exports = mergedConfig;
