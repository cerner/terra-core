const path = require('path');
const webpackConfig = require('terra-dev-site/src/config/webpack.config');
const I18nAggregatorPlugin = require('./packages/terra-i18n-plugin');
const i18nSupportedLocales = require('./packages/terra-i18n/lib/i18nSupportedLocales');

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;
const translationsPath = path.join(rootPath, 'packages', 'terra-site');

const i18nPlugin = new I18nAggregatorPlugin({
  baseDirectory: path.resolve(translationsPath),
  supportedLocales: i18nSupportedLocales,
});

const plugins = webpackConfig.plugins;
plugins[2] = i18nPlugin;

webpackConfig.plugins = plugins;

webpackConfig.resolve.modules = [path.resolve(translationsPath, 'aggregated-translations'), 'node_modules'];

const momentAlias = path.resolve(path.join(rootPath, 'packages', 'terra-date-time-picker', 'node_modules', 'moment'));

webpackConfig.resolve.alias.moment = momentAlias;


module.exports = webpackConfig;
