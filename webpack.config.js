const path = require('path');
const merge = require('webpack-merge');
const defaultWebpackConfig = require('terra-dev-site/config/webpack/webpack.config');

const coreConfig = () => {
  const processPath = process.cwd();
  const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

  const i18nAlias = path.resolve(path.join(rootPath, 'packages', 'terra-i18n'));
  return {
    module: {
      rules: [
        {
          test: /package\.json$/,
          exclude: /node_modules/,
          loader: path.resolve('scripts/props-table-gen/props-loader.js'),
        },
      ],
    },
    resolve: {
      alias: {
        'terra-i18n': i18nAlias,
      },
    },
  };
};

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), coreConfig())
);

module.exports = mergedConfig;
