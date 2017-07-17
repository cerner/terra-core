/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-progress-bar', done);
  },

  'Displays a default progress bar': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/default`); // Browser computes #304FFE to rgba(48, 79, 254, 1);
  },

  'Displays tiny progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`);
    browser.getCssProperty('#progressbarTiny', 'height', (result) => {
      browser.assert.equal(Math.round(parseFloat(result.value)), 7);
    });
  },

  'Displays small progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`);
    browser.getCssProperty('#progressbarSmall', 'height', (result) => {
      browser.assert.equal(Math.round(parseFloat(result.value)), 11);
    });
  },

  'Displays medium progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .getCssProperty('#progressbarMedium', 'height', (result3) => {
        browser.assert.equal(Math.round(parseFloat(result3.value)), 14);
      });
  },

  'Displays large progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .getCssProperty('#progressbarLarge', 'height', (result3) => {
        browser.assert.equal(Math.round(parseFloat(result3.value)), 20);
      });
  },

  'Displays huge progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .getCssProperty('#progressbarHuge', 'height', (result3) => {
        browser.assert.equal(Math.round(parseFloat(result3.value)), 24);
      });
  },

  'Displays orange progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .expect.element('#progressbarWithNamedColor').to.have.attribute('color').which.contains('Orange');
  },

  'Displays #8ccc62 progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .expect.element('#progressbarWithHexColor').to.have.attribute('color').which.contains('#8ccc62');
  },

  'Displays rgb(255, 0, 0) progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .expect.element('#progressbarWithRGBColor').to.have.attribute('color').which.contains('rgb(255, 0, 0)');
  },

};
