const wdioConf = require('terra-dev-site/src/wdio/wdio.conf');
const webpackConfig = require('./webpack.config');

const config = {
  ...wdioConf.config,

  webpackConfig,
};

exports.config = config;
