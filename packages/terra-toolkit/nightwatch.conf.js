/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('./lib/index').testSettings;
const resolve = require('path').resolve;

module.exports = ((settings) => {
  const returnSettings = settings;
  returnSettings.test_settings = testSettings(resolve('./tests/test.config'));
  returnSettings.globals_path = './lib/globals.js';
  return returnSettings;
})(require('./lib/nightwatch.json'));
