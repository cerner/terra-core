/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
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
    browser.expect.element('#text').text.to.equal('Default');
    browser.expect.element('#text').to.be.an('span');
  },

  'Displays a text component with a set color': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/color`);
    browser.assert.cssProperty('#textColor', 'color', 'rgba(48, 79, 254, 1)'); // Browser computes #304FFE to rgba(48, 79, 254, 1)
  },

  'Displays a text component with a set font size': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/font-size`);
    // Browser computes rem units as pixels when retrieved
    browser.assert.cssProperty('#textFontSize100', 'font-size', '100px');
    browser.assert.cssProperty('#textFontSize32', 'font-size', '32px');
    browser.assert.cssProperty('#textFontSize24', 'font-size', '24px');
    browser.assert.cssProperty('#textFontSize20', 'font-size', '20px');
    browser.assert.cssProperty('#textFontSize18', 'font-size', '18px');
    browser.assert.cssProperty('#textFontSize16', 'font-size', '16px');
    browser.assert.cssProperty('#textFontSize14', 'font-size', '14px');
    browser.assert.cssProperty('#textFontSize12', 'font-size', '12px');
    browser.assert.cssProperty('#textFontSize10', 'font-size', '10px');
  },

  'Displays a text component with set italics': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/italics`);
    browser.assert.cssProperty('#textItalic', 'font-style', 'italic');
  },

  'Displays a text component with a set weight': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/weight`);
    browser.assert.cssProperty('#textFontWeight700', 'font-weight', 'bold'); // Browser computes 700 as bold
    browser.assert.cssProperty('#textFontWeight400', 'font-weight', 'normal'); // Browser computes 400 as normal
    browser.assert.cssProperty('#textFontWeight200', 'font-weight', '200');
  },

  'Displays a text component with set hidden visibility': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visually-hidden`);
    browser.assert.cssProperty('#textVisuallyHidden', 'border', '0px none rgb(28, 31, 33)'); // Browser computes 0 as 0px none rgb(28, 31, 33)
    browser.assert.cssProperty('#textVisuallyHidden', 'clip', 'rect(0px 0px 0px 0px)');
    browser.assert.cssProperty('#textVisuallyHidden', 'height', '1px');
    browser.assert.cssProperty('#textVisuallyHidden', 'margin', '-1px');
    browser.assert.cssProperty('#textVisuallyHidden', 'overflow', 'hidden');
    browser.assert.cssProperty('#textVisuallyHidden', 'padding', '0px');
    browser.assert.cssProperty('#textVisuallyHidden', 'position', 'absolute');
    browser.assert.cssProperty('#textVisuallyHidden', 'width', '1px');
  },

  'Displays a text component with all visual props set': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/text-tests/visual-props`);
    browser.expect.element('#textVisualProps').text.to.equal('All Visual Props Set');
  },
};
