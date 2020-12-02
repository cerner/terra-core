const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultWdioConfig = require('terra-toolkit/config/wdio/wdio.conf');

const wdioConfig = defaultWdioConfig.config;

if (process.env.npm_package_name !== 'terra-core') {
  const directory = process.env.npm_package_name.replace('@cerner/', '');
  wdioConfig.specs = [path.join(__dirname, 'packages', directory, 'tests', 'wdio', '**', '*-spec.js')];
}

const travis = process.env.TRAVIS;

if (travis) {
  wdioConfig.host = 'localhost';
}

exports.config = wdioConfig;
