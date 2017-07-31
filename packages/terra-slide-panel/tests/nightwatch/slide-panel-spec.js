/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-slide-panel', done);
  },

  'Displays a the SlidePanel with defaulted props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/default`);

    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('end');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('small');

    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('is-open');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('is-fullscreen');
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.not.contains('fill');

    browser.expect.element('[class*="slide-panel"] > div[class*="panel"]:first-child').to.have.attribute('aria-hidden').equals('true');
  },

  'Displays a the SlidePanel with behavior of "overlay"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/behavior-overlay`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('overlay');
  },

  'Displays a the SlidePanel with behavior of "squish"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/behavior-squish`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-behavior').equals('squish');
  },

  'Displays a the SlidePanel with position of "start"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/position-start`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('start');
  },

  'Displays a the SlidePanel with position of "end"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/position-end`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-position').equals('end');
  },

  'Displays a the SlidePanel with size of "small"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/size-small`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('small');
  },

  'Displays a the SlidePanel with size of "large"': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/size-large`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('data-slide-panel-panel-size').equals('large');
  },

  'Displays a the SlidePanel with isOpen prop set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/open`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('is-open');
    browser.expect.element('[class*="slide-panel"] > div[class*="panel"]:first-child').to.not.have.attribute('aria-hidden');
  },

  'Displays a the SlidePanel with isFullscreen prop set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/fullscreen`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('is-fullscreen');
  },

  'Displays a the SlidePanel with fill prop set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/slide-panel-tests/fill`);
    browser.expect.element('[class*="slide-panel"]').to.have.attribute('class').which.contains('fill');
  },
};
