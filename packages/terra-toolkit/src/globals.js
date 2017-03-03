import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import sauceConnectLauncher from 'sauce-connect-launcher';
import updateSauce from './update-sauce';

module.exports = {
  before: (done) => {
    if (process.env.REMOTE === 'true') {
      sauceConnectLauncher({
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        port: 4446,
      }, (_, sauceConnectProcess) => {
        module.sauceConnectProcess = sauceConnectProcess;
        done();
      });
    }
  },
  after: (done) => {
    if (module.sauceConnectProcess) {
      module.sauceConnectProcess.close(done);
    }
  },
  beforeEach: (browser, done) => {
    /* eslint-disable global-require, import/no-dynamic-require */
    const config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    const globals = browser.globals;
    globals.server = new WebpackDevServer(webpack(config), {
      quiet: true,
    });

    globals.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    browser.globals.server.close();
    browser.end(done);

    if (process.env.REMOTE === 'true') {
      updateSauce(browser, done);
    }
  },
};
