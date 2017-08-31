// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default text component': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/default`);
    browser.expect.element('#text').text.to.equal('Default');
    browser.expect.element('#text').to.be.an('span');
  },

  'Displays a text component with a set color': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/color`);
    browser.assert.cssProperty('#textColor', 'color', 'rgba(48, 79, 254, 1)'); // Browser computes #304FFE to rgba(48, 79, 254, 1)
  },

  'Displays a text component with a set font size': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/font-size`);
    // Chrome browser computes to the hundredths, rem units to pixels, when retrieved
    browser.assert.cssProperty('#textFontSize100', 'font-size', '100.002px');
    browser.assert.cssProperty('#textFontSize32', 'font-size', '32.004px');
    browser.assert.cssProperty('#textFontSize24', 'font-size', '23.996px');
    browser.assert.cssProperty('#textFontSize20', 'font-size', '20.006px');
    browser.assert.cssProperty('#textFontSize18', 'font-size', '18.004px');
    browser.assert.cssProperty('#textFontSize16', 'font-size', '16.002px');
    browser.assert.cssProperty('#textFontSize14', 'font-size', '14px');
    browser.assert.cssProperty('#textFontSize12', 'font-size', '11.9994px');
    browser.assert.cssProperty('#textFontSize10', 'font-size', '10.0002px');
  },

  'Displays a text component with set italics': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/italics`);
    browser.assert.cssProperty('#textItalic', 'font-style', 'italic');
  },

  'Displays a text component with a set weight': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/weight`);
    browser.assert.cssProperty('#textFontWeight700', 'font-weight', 'bold'); // Browser computes 700 as bold
    browser.assert.cssProperty('#textFontWeight400', 'font-weight', 'normal'); // Browser computes 400 as normal
    browser.assert.cssProperty('#textFontWeight200', 'font-weight', '200');
  },

  'Displays a text component with set hidden visibility': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/text-tests/visually-hidden`);
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
    browser.url(`${browser.launchUrl}/#/tests/text-tests/visual-props`);
    browser.expect.element('#textVisualProps').text.to.equal('All Visual Props Set');
  },
});
