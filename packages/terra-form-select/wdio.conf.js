const path = require('path');
const wdioConf = require('../../node_modules/terra-toolkit/config/wdio/wdio.conf');

wdioConf.config.specs = [path.join(__dirname, 'tests', 'wdio', '**', '*-spec.js')];

exports.config = wdioConf.config;
