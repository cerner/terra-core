/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const path = require('path');
const fs = require('fs');
const loadJsonFile = require('load-json-file');
const globSync = require('glob').sync;
const testSettings = require('./packages/terra-toolkit/lib/index').testSettings;
const resolve = require('path').resolve;
const nightwatchConfiguration = require('./packages/terra-toolkit/lib/nightwatch.json');

module.exports = ((settings) => {
  const updatedSettings = testSettings(resolve('./packages/terra-site/webpack.config'), settings);
  updatedSettings.globals_path = './packages/terra-toolkit/lib/globals.js';

  updatedSettings.src_folders = [];
  loadJsonFile.sync(path.resolve('lerna.json')).packages.forEach((globPath) => {
    globSync(globPath).forEach((packagePath) => {
      const nightWatchPath = `${packagePath}/tests/nightwatch`;
      if (fs.existsSync(nightWatchPath) && nightWatchPath !== 'packages/terra-toolkit/tests/nightwatch') {
        updatedSettings.src_folders.push(nightWatchPath);
      }
    });
  });

  return updatedSettings;
})(nightwatchConfiguration);
