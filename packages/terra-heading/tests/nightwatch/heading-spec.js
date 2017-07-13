/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
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
    browser.expect.element('.terra-Heading').to.be.an('h1');
  },

  'Displays a heading component with a set color': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/color`);
    browser.assert.cssProperty('.terra-Heading', 'color', 'rgba(48, 79, 254, 1)'); // Browser computes #304FFE to rgba(48, 79, 254, 1)
  },

  'Displays a heading component with a set size': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/size`);
    // Browser computes rem units as pixels when retrieved
    browser.assert.cssProperty('.terra-Heading--size-huge', 'font-size', '32px');
    browser.assert.cssProperty('.terra-Heading--size-large', 'font-size', '24px');
    browser.assert.cssProperty('.terra-Heading--size-medium', 'font-size', '20px');
    browser.assert.cssProperty('.terra-Heading--size-small', 'font-size', '18px');
    browser.assert.cssProperty('.terra-Heading--size-tiny', 'font-size', '16px');
    browser.assert.cssProperty('.terra-Heading--size-mini', 'font-size', '14px');
  },

  'Displays a heading component with set italics': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/italics`);
    browser.assert.cssProperty('.terra-Heading--italic', 'font-style', 'italic');
  },

  'Displays a heading component with set levels': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/levels`);
    // Browser computes rem units as pixels when retrieved
    browser.assert.cssProperty('.terra-Heading--level-1', 'font-size', '32px');
    browser.assert.cssProperty('.terra-Heading--level-2', 'font-size', '24px');
    browser.assert.cssProperty('.terra-Heading--level-3', 'font-size', '20px');
    browser.assert.cssProperty('.terra-Heading--level-4', 'font-size', '18px');
    browser.assert.cssProperty('.terra-Heading--level-5', 'font-size', '16px');
    browser.assert.cssProperty('.terra-Heading--level-6', 'font-size', '14px');
  },

  'Displays a heading component with a set weight': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/weight`);
    browser.assert.cssProperty('.terra-Heading--weight-700', 'font-weight', 'bold'); // Browser computes 700 as bold
    browser.assert.cssProperty('.terra-Heading--weight-400', 'font-weight', 'normal'); // Browser computes 400 as normal
    browser.assert.cssProperty('.terra-Heading--weight-200', 'font-weight', '200');
  },

  'Displays a heading component with set hidden visibility': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/visually-hidden`);
    browser.assert.cssProperty('.terra-Heading', 'border', '0px none rgb(28, 31, 33)'); // Browser computes 0 as 0px none rgb(28, 31, 33)
    browser.assert.cssProperty('.terra-Heading', 'clip', 'rect(0px 0px 0px 0px)');
    browser.assert.cssProperty('.terra-Heading', 'height', '1px');
    browser.assert.cssProperty('.terra-Heading', 'margin', '-1px');
    browser.assert.cssProperty('.terra-Heading', 'overflow', 'hidden');
    browser.assert.cssProperty('.terra-Heading', 'padding', '0px');
    browser.assert.cssProperty('.terra-Heading', 'position', 'absolute');
    browser.assert.cssProperty('.terra-Heading', 'width', '1px');
  },

  'Displays a heading component with all visual props set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/heading-tests/visual-props`);
    browser.expect.element('.terra-Heading').text.to.equal('All Visual Props Set');
  },
};
