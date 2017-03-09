/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('../packages/terra-toolkit/').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('../packages/terra-toolkit/lib/nightwatch.json');

module.exports = (settings => (
  testSettings(resolve('../../packages/terra-site/webpack.config'), settings)
))(nightwatchConfiguration);
