/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;

module.exports = ((settings) => {
  const returnSettings = settings;
  returnSettings.test_settings = testSettings(resolve('../../webpack.config'));
  return returnSettings;
})(require('../node_modules/terra-toolkit/lib/nightwatch.json'));
