/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-heading', done);
  },

  'Displays a default heading component': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/default`);
    browser.expect.element('.terra-Heading').text.to.equal('Default');
  },

  'Displays a heading component with a set color': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/color`);
    browser.expect.element('.terra-Heading').text.to.equal('Color');
  },

  'Displays a heading component with a set size': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/size`);
    browser.expect.element('.terra-Heading').text.to.equal('Size');
  },

  'Displays a heading component with set italics': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/italics`);
    browser.expect.element('.terra-Heading').text.to.equal('Italics');
  },

  'Displays a heading component with set levels': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/levels`);
    browser.expect.element('.terra-Heading--level-1').text.to.equal('Level 1');
    browser.expect.element('.terra-Heading--level-2').text.to.equal('Level 2');
    browser.expect.element('.terra-Heading--level-3').text.to.equal('Level 3');
    browser.expect.element('.terra-Heading--level-4').text.to.equal('Level 4');
    browser.expect.element('.terra-Heading--level-5').text.to.equal('Level 5');
    browser.expect.element('.terra-Heading--level-6').text.to.equal('Level 6');
  },

  'Displays a heading component with a set weight': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/weight`);
    browser.expect.element('.terra-Heading').text.to.equal('Weight');
  },

  'Displays a heading component with set hidden visibility': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/visually-hidden`);
    browser.expect.element('.terra-Heading').text.to.equal('Visually Hidden');
  },

  'Displays a heading component with all visual props set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/visual-props`);
    browser.expect.element('.terra-Heading').text.to.equal('Visual Props');
  },
};
