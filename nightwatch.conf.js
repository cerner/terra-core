/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const path = require('path');
const fs = require('fs');
const loadJsonFile = require('load-json-file');
const globSync = require('glob').sync;
const testSettings = require('terra-toolkit/lib/index').testSettings;
const nightwatchConfiguration = require('terra-toolkit/lib/nightwatch.json');
const config = require('terra-toolkit/lib/webpack.config');

module.exports = ((settings) => {
  const updatedSettings = testSettings(config, settings);
  updatedSettings.globals_path = './node_modules/terra-toolkit/lib/globals.js';

  updatedSettings.src_folders = [];
  loadJsonFile.sync(path.resolve('lerna.json')).packages.forEach((globPath) => {
    globSync(globPath).forEach((packagePath) => {
      const nightWatchPath = `${packagePath}/tests/nightwatch`;
      if (fs.existsSync(nightWatchPath)) {
        updatedSettings.src_folders.push(nightWatchPath);
      }
    });
  });

  return updatedSettings;
})(nightwatchConfiguration);
