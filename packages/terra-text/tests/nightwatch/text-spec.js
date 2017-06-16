/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-text', done);
  },

  'Displays a default text component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/default`);
    browser.expect.element('.terra-Text').text.to.equal('Default');
  },

  'Displays a text component with a set color': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/color`);
    browser.expect.element('.terra-Text').text.to.equal('Color');
  },

  'Displays a text component with a set font size': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/font-size`);
    browser.expect.element('.terra-Text').text.to.equal('Font Size');
  },

  'Displays a text component with set italics': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/italics`);
    browser.expect.element('.terra-Text').text.to.equal('Italics');
  },

  'Displays a text component with a set weight': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/weight`);
    browser.expect.element('.terra-Text').text.to.equal('Weight');
  },

  'Displays a text component with set hidden visibility': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visually-hidden`);
    browser.expect.element('.terra-Text').text.to.equal('Visually Hidden');
  },

  'Displays a text component with all visual props set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visual-props`);
    browser.expect.element('.terra-Text').text.to.equal('Visual Props');
  },
};
