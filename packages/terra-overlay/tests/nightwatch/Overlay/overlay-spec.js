/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-overlay', done);
  },

  'Displays a default overlay': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/default`);
  },

  'Displays a fullscreen Overlay as the default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/default`);
  },

  'Displays a default Overlay relative to the triggering container': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/container`);
  },

  'Displays a fullscreen Overlay with isScrollable prop': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/fullscreen-scrollable`);
  },

  'Displays an Overlay relative to container with isScrollable prop': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/container-scrollable`);
  },

  'Triggers an onRequestClose on escape keydown': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('#terra-Overlay--fullscreen');
    browser.keys(browser.Keys.ESCAPE);
    browser.assert.elementNotPresent('#terra-Overlay--fullscreen');

    browser.click('#trigger_container');
    browser.assert.elementPresent('#terra-Overlay--container');
    browser.keys(browser.Keys.ESCAPE);
    browser.assert.elementNotPresent('#terra-Overlay--container');
  },

  'Triggers an onRequestClose on click inside of the Overlay': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('#terra-Overlay--fullscreen');
    browser.click('#terra-Overlay--fullscreen');
    browser.assert.elementNotPresent('#terra-Overlay--fullscreen');

    browser.click('#trigger_container');
    browser.assert.elementPresent('#terra-Overlay--container');
    browser.click('#terra-Overlay--container');
    browser.assert.elementNotPresent('#terra-Overlay--container');
  },

  'Background does not scroll when a fullscreen Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('#terra-Overlay--fullscreen');
    browser.expect.element('html').to.have.attribute('style').which.equals('overflow: hidden;');

    browser.click('#terra-Overlay--fullscreen');
    browser.assert.elementNotPresent('#terra-Overlay--fullscreen');
    browser.expect.element('html').to.have.attribute('style').which.equals('');
  },

  'Background can scroll when a Overlay relative to contianer is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/on-request-close`);
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('#trigger_container');
    browser.assert.elementPresent('#terra-Overlay--container');
    browser.expect.element('html').to.have.attribute('style').which.equals('');

    browser.click('#terra-Overlay--container');
    browser.assert.elementNotPresent('#terra-Overlay--container');
    browser.expect.element('html').to.have.attribute('style').which.equals('');
  },

  'Content under overlay is not clickable when Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/custom-content`);
    browser.click('#trigger_fullscreen');
    browser.assert.elementPresent('#terra-Overlay--fullscreen');
    browser.assert.containsText('#random_state', 'true');
    browser.click('#random_button');
    browser.assert.containsText('#random_state', 'true');
  },

  'Content outside of OverlayContainer is clickable when container Overlay is open': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/custom-content`);
    browser.click('#trigger_container');
    browser.assert.elementPresent('#terra-Overlay--container');
    browser.assert.containsText('#random_state', 'true');
    browser.click('#random_button');
    browser.assert.containsText('#random_state', 'false');
  },

  'Displays a Overlay with a light theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/light-themed`);
  },

  'Displays a Overlay with a dark theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/dark-themed`);
  },

  'Displays a Overlay with a clear theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-tests/clear-themed`);
  },
};
