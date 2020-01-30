const path = require('path');
const wdioConf = require('../../config/wdio/clinical-lowlight-theme/wdio.conf.js');

wdioConf.config.specs = [path.join(__dirname, 'tests', 'wdio', '**', '*-spec.js')];

exports.config = wdioConf.config;
