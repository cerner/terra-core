const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');

const config = {
  ...wdioConf.config,
  suite: [
    'packages/terra-a*/**/**-spec.js',
  ],
};

exports.config = config;
