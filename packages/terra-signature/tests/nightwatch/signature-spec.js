// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {

  'Draw a line signature and verify canvas': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/signature-tests/singleline`)
      .waitForElementPresent('body', 1000)
      .waitForElementPresent('canvas', 1000)
      .expect.element('.terra-Signature').to.be.present;
  }

});
