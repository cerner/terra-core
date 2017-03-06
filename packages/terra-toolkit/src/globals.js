// import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';
import updateSauce from './update-sauce';
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
  beforeEach: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    browser.end(() => {
      if (process.env.REMOTE === 'true') {
        updateSauce(browser, done);
      } else {
        done();
      }
    });
  },
};
