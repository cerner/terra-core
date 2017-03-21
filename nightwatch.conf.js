/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const testSettings = require('./packages/terra-toolkit/lib/index').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('./packages/terra-toolkit/lib/nightwatch.json');

module.exports = ((settings) => {
  const updatedSettings = testSettings(resolve('./packages/terra-site/webpack.config'), settings);
  updatedSettings.globals_path = './packages/terra-toolkit/lib/globals.js';
  updatedSettings.src_folders = ['packages/terra-button/tests/nightwatch',
    'packages/terra-i18n/tests/nightwatch',
    'packages/terra-icon/tests/nightwatch',
    'packages/terra-image/tests/nightwatch',
    'packages/terra-responsive-element/tests/nightwatch',
    'packages/terra-slide-panel/tests/nightwatch',
  ];
  return updatedSettings;
})(nightwatchConfiguration);
