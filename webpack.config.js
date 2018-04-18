const path = require('path');
const webpackConfig = require('terra-dev-site/config/webpack/webpack.config')();

const processPath = process.cwd();
const rootPath = processPath.includes('packages') ? processPath.split('packages')[0] : processPath;

const momentAlias = path.resolve(path.join(rootPath, 'packages', 'terra-date-time-picker', 'node_modules', 'moment'));
webpackConfig.resolve.alias.moment = momentAlias;

const i18nAlias = path.resolve(path.join(rootPath, 'packages', 'terra-i18n'));
webpackConfig.resolve.alias['terra-i18n'] = i18nAlias;

module.exports = webpackConfig;
