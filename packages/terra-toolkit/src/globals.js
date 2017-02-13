/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

module.exports = {
  beforeEach: (browser, done) => {
    /* eslint-disable global-require, import/no-dynamic-require */
    const config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    this.server = new WebpackDevServer(webpack(config), {
      quiet: true,
    });

    this.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    this.server.close();
    browser.end(done);
  },
};
