// eslint-disable-next-line import/no-extraneous-dependencies
const testSettings = require('terra-toolkit').testSettings;
const resolve = require('path').resolve;
// eslint-disable-next-line import/no-extraneous-dependencies
const nightwatchConfiguration = require('terra-toolkit/lib/nightwatch.json');

module.exports = ((settings) => {
  const modifiedSettings = settings;
  modifiedSettings.globals_path = resolve('..', '..', 'node_modules', 'terra-toolkit', 'lib', 'globals');
  return testSettings(resolve('../../webpack.config'), modifiedSettings);
})(nightwatchConfiguration);
