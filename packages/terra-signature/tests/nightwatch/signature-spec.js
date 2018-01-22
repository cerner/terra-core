/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo } = require('terra-toolkit/lib/nightwatch/responsive-helpers');
const constants = require('./SignatureConstants');

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default signature': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas[class*="signature"]').to.be.present;
  },

  'Draw a line signature and verify canvas': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 0, 0)
      .mouseButtonDown(0)
      .moveToElement('canvas#drawline', 90, 90)
      .mouseButtonUp(0);

    browser
      .execute(function () {
        return document.getElementById('drawline').toDataURL();
      }, [], function (result) {
        browser.assert.equal(result.value, constants.line);
      });
  },

  'Draw line, exit canvas to another element, then continue drawing': (browser) => {
    browser.url(`${browser.launchUrl}/#tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
    .moveToElement('canvas#drawline', 0, 0)
    .mouseButtonDown(0)
    .moveToElement('div#othersection', 0, 0)
    .moveToElement('canvas#drawline', 90, 90)
    .mouseButtonUp(0);

    browser
    .execute(function () {
      return document.getElementById('drawline').toDataURL();
    }, [], function (result) {
      browser.assert.equal(result.value, constants.line);
    });
  },

  'Validates right click drawing is disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 0, 0)
      .mouseButtonDown(2)
      .moveToElement('canvas#drawline', 90, 90)
      .mouseButtonUp(2);

    browser
      .execute(function () {
        return document.getElementById('drawline').toDataURL();
      }, [], function (result) {
        browser.assert.equal(result.value, constants.blankCanvas);
      });
  },

  'Validates middle click drawing is disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/signature-tests/default`);
    browser.expect.element('canvas#drawline').to.be.present;

    browser
      .moveToElement('canvas#drawline', 0, 0)
      .mouseButtonDown(1)
      .moveToElement('canvas#drawline', 90, 90)
      .mouseButtonUp(1);

    browser
      .execute(function () {
        return document.getElementById('drawline').toDataURL();
      }, [], function (result) {
        browser.assert.equal(result.value, constants.blankCanvas);
      });
  },
});
