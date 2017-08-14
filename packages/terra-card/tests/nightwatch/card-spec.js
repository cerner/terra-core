/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-card', done);
  },

  'Displays a default card': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/default`)
      .expect.element('#defaultcard').to.be.present;
  },

  'Displays a card with padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/padding`)
      .expect.element('#paddingcard').to.be.present;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/padding`)
      .expect.element('#paddingcard').to.have.attribute('class').which.contains('veritcal-padding');
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/padding`)
      .expect.element('#paddingcard').to.have.attribute('class').which.contains('horizontal-padding');
  },

  'Displays a card with vertical padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/verticalPadding`)
      .expect.element('#vertical').to.be.present;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/verticalPadding`)
      .expect.element('#vertical').to.have.attribute('class').which.contains('veritcal-padding');
  },

  'Displays a card with horizontal padding': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/horizontalPadding`)
      .expect.element('#horizontal').to.be.present;
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/card-tests/horizontalPadding`)
      .expect.element('#horizontal').to.have.attribute('class').which.contains('horizontal-padding');
  },
};
