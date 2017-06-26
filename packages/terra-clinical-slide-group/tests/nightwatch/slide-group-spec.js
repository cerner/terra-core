// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-clinical-slide-group', done);
  },

  'Displays a default SlideGroup with the a few items': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-group-tests/default`);

    browser.expect.element('.terraClinical-Slide:nth-child(1)').to.have.attribute('aria-hidden');
    browser.expect.element('.terraClinical-Slide:nth-child(1)').text.to.equal('Slide 1');
    browser.expect.element('.terraClinical-Slide:nth-child(2)').to.not.have.attribute('aria-hidden');
    browser.expect.element('.terraClinical-Slide:nth-child(2)').text.to.equal('Slide 2');
  },
};

