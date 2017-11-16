// eslint-disable-next-line import/no-extraneous-dependencies
const wdioConf = require('terra-toolkit/lib/wdio/conf');
const localIP = require('ip');
const path = require('path');

const staticServerPort = 8080;

const config = {
  ...wdioConf.config,

  baseUrl: `http://${localIP.address()}:${staticServerPort}`,
  specs: [
    path.join(__dirname, 'packages', '**', 'tests', 'specs', '**'),
  ],
  staticServerPort,
  staticServerLog: false,
  staticServerFolders: [
    { mount: '/', path: path.join(__dirname, 'packages', 'terra-site', 'dist') },
  ],

  suites: {
    badge: [
      path.join(__dirname, 'packages', 'terra-badge', 'tests', 'specs', '**'),
    ],
  },

  seleniumDocker: {
    enabled: !process.env.TRAVIS,
    cleanup: false,
  },
  // eslint-disable-next-line global-require
  webpackConfig: require('./packages/terra-site/webpack.config.js'),
};


config.services = wdioConf.config.services.concat(['webpack', 'static-server']);
exports.config = config;
