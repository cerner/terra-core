const path = require('path');
const webpackConfig = require('terra-dev-site/src/config/webpack.config');
const aggregateTranslations = require('./packages/terra-i18n/scripts/aggregate-translations/aggregate-translations');

aggregateTranslations({ baseDirectory: __dirname });

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

// Remove the terra-i18n-plugin from the configuration
const startPlugins = webpackConfig.plugins.splice(0, 2);
const endPlugins = webpackConfig.plugins.splice(1, webpackConfig.plugins.length);
webpackConfig.plugins = startPlugins.concat(endPlugins);

const momentAlias = path.resolve(path.join(rootPath, 'packages', 'terra-date-time-picker', 'node_modules', 'moment'));
webpackConfig.resolve.alias.moment = momentAlias;

const i18nAlias = path.resolve(path.join(rootPath, 'packages', 'terra-i18n'));
webpackConfig.resolve.alias['terra-i18n'] = i18nAlias;

module.exports = webpackConfig;
