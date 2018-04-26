/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-dev-site/config/wdio/wdio.conf');
const webpackConfig = require('./webpack.config');

const config = {
  ...wdioConf.config,

  webpackConfig,

    // Configuration for SeleniumDocker service
  seleniumDocker: {
    enabled: !process.env.TRAVIS,
  },

};

exports.config = config;
