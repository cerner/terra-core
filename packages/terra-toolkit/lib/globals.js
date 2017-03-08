"use strict";

// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
// import updateSauce from './update-sauce';
// import { launchSauceConnect, closeSauceConnect } from './sauce-launcher';

module.exports = {
  // before: (done) => {
  //   if (process.env.REMOTE === 'true') {
  //     launchSauceConnect(done);
  //   } else {
  //     done();
  //   }
  // },
  // after: (done) => {
  //   closeSauceConnect(done);
  // },
  // beforeEach: (browser, done) => {
  //   /* eslint-disable global-require, import/no-dynamic-require */
  //   const config = require(browser.globals.testConfigPath);
  //   /* eslint-enable global-require, import/no-dynamic-require */
  //   const globals = browser.globals;
  //   globals.server = new WebpackDevServer(webpack(config), {
  //     quiet: true,
  //   });

  //   globals.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
  //   browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  // },
  // afterEach: (browser, done) => {
  //   browser.globals.server.close();
  //   browser.end(done);

  //   if (process.env.REMOTE === 'true') {
  //     updateSauce(browser, done);
  //   } else {
  //     done();
  //   }
  // },
};