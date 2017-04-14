/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('../node_modules/terra-toolkit/lib/nightwatch.json');

module.exports = (settings => (
  testSettings(resolve('../../webpack.config'), settings)
))(nightwatchConfiguration);
