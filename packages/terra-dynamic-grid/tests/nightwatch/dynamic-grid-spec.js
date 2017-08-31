/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-dynamic-grid', done);
  },

  'Displays a default dynamic-grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/dynamic-grid-tests/default`)
      .assert.elementPresent('#defaultDynamicGrid');

    /* TODO: Uncomment when we switch to headless chrome. PhantomJS doesn't support grids.
    browser.expect.element('#defaultDynamicGrid').to.have.css('display').which.matches(/^(-ms-)?grid$/);
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-gap');
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-template-columns');
    browser.expect.element('#defaultDynamicGrid').to.have.css('grid-template-rows');
    */

    /* TODO: Uncomment when we switch to headless chrome. PhantomJS doesn't support grids.
    browser.expect.element('#region1').to.have.attribute('data-region-name').equals('r1');
    browser.expect.element('#region1').to.have.css('grid-row-start');
    browser.expect.element('#region1').to.have.css('grid-column-start');
    */
    browser.expect.element('#region1').text.to.equal('R1');

    /* TODO: Uncomment when we switch to headless chrome. PhantomJS doesn't support grids.
    browser.expect.element('#region2').to.have.attribute('data-region-name').equals('r2');
    browser.expect.element('#region2').to.have.css('grid-row-start');
    browser.expect.element('#region2').to.have.css('grid-column-start');
    */
    browser.expect.element('#region2').text.to.equal('R2');
  },
};
