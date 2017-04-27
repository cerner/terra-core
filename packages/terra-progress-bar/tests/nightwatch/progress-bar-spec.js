/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/default`)
      .waitForElementPresent('.terra-ProgressBar', 1000)
      .expect.element('.terra-ProgressBar').to.have.attribute('class').which.contains('terra-ProgressBar');
  },

  'Displays tiny progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--tiny', 1000)
      .expect.element('.terra-ProgressBar--tiny').to.have.attribute('class').which.contains('terra-ProgressBar terra-ProgressBar--tiny');
  },

  'Displays small progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--small', 1000)
      .expect.element('.terra-ProgressBar--small').to.have.attribute('class').which.contains('terra-ProgressBar terra-ProgressBar--small');
  },

  'Displays medium progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--medium', 1000)
      .expect.element('.terra-ProgressBar--medium').to.have.attribute('class').which.contains('terra-ProgressBar terra-ProgressBar--medium');
  },

  'Displays large progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--large', 1000)
      .expect.element('.terra-ProgressBar--large').to.have.attribute('class').which.contains('terra-ProgressBar terra-ProgressBar--large');
  },

  'Displays huge progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/size`)
      .waitForElementPresent('.terra-ProgressBar--huge', 1000)
      .expect.element('.terra-ProgressBar--huge').to.have.attribute('class').which.contains('terra-ProgressBar terra-ProgressBar--huge');
  },

  'Displays orange progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="Orange"]', 1000)
      .expect.element('.terra-ProgressBar[color="Orange"]').to.have.attribute('color').which.contains('Orange');
  },

  'Displays #8ccc62 progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="#8ccc62"]', 1000)
      .expect.element('.terra-ProgressBar[color="#8ccc62"]').to.have.attribute('color').which.contains('#8ccc62');
  },

  'Displays rgb(255, 0, 0) progress bar example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/progress-bar-tests/color`)
      .waitForElementPresent('.terra-ProgressBar[color="rgb(255, 0, 0)"]', 1000)
      .expect.element('.terra-ProgressBar[color="rgb(255, 0, 0)"]').to.have.attribute('color').which.contains('rgb(255, 0, 0)');
  },

};
