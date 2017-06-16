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
    browser.expect.element('.terra-Text--fontSize-100').text.to.equal('Font Size 100');
    browser.expect.element('.terra-Text--fontSize-32').text.to.equal('Font Size 32');
    browser.expect.element('.terra-Text--fontSize-24').text.to.equal('Font Size 24');
    browser.expect.element('.terra-Text--fontSize-20').text.to.equal('Font Size 20');
    browser.expect.element('.terra-Text--fontSize-18').text.to.equal('Font Size 18');
    browser.expect.element('.terra-Text--fontSize-16').text.to.equal('Font Size 16');
    browser.expect.element('.terra-Text--fontSize-14').text.to.equal('Font Size 14');
    browser.expect.element('.terra-Text--fontSize-12').text.to.equal('Font Size 12');
    browser.expect.element('.terra-Text--fontSize-10').text.to.equal('Font Size 10');
  },

  'Displays a text component with set italics': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/italics`);
    browser.expect.element('.terra-Text').text.to.equal('Italics');
  },

  'Displays a text component with a set weight': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/weight`);
    browser.expect.element('.terra-Text--weight-700').text.to.equal('700 Weight');
    browser.expect.element('.terra-Text--weight-400').text.to.equal('400 Weight');
    browser.expect.element('.terra-Text--weight-200').text.to.equal('200 Weight');
  },

  'Displays a text component with set hidden visibility': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visually-hidden`);
    browser.expect.element('.terra-Text').text.to.equal('Visually Hidden');
  },

  'Displays a text component with all visual props set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visual-props`);
    browser.expect.element('.terra-Text').text.to.equal('All Visual Props Set');
  },
};
