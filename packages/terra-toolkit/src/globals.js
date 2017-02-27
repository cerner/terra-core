// import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

module.exports = {
  beforeEach: (browser, done) => {
    /* eslint-disable global-require, import/no-dynamic-require */
    // const config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    const globals = browser.globals;
    globals.server = new WebpackDevServer(browser.globals.testConfigPath, {
      quiet: true,
    });

    globals.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    browser.globals.server.close();
    browser.end(done);
  },
};
