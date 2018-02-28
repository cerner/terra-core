const path = require('path');
const webpackConfig = require('terra-dev-site/src/config/webpack.config');
const I18nAggregatorPlugin = require('./packages/terra-i18n-plugin');
const i18nSupportedLocales = require('./packages/terra-i18n/lib/i18nSupportedLocales');

const translationsPath = path.join(process.cwd(), 'packages', 'terra-site');

const i18nPlugin = new I18nAggregatorPlugin({
  baseDirectory: path.resolve(translationsPath),
  supportedLocales: i18nSupportedLocales,
});

const plugins = webpackConfig.plugins;
plugins[2] = i18nPlugin;

webpackConfig.plugins = plugins;

webpackConfig.resolve.modules = [path.resolve(translationsPath, 'aggregated-translations'), 'node_modules'];

const momentAlias = path.resolve(path.join(process.cwd(), 'packages', 'terra-date-time-picker', 'node_modules', 'moment'));

webpackConfig.resolve.alias.moment = momentAlias;


module.exports = webpackConfig;
