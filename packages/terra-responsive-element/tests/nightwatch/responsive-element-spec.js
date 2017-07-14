/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

const windowSizes = {
  default: [470, 768],
  tiny: [622, 768],
  small: [838, 768],
  medium: [1000, 768],
  large: [1300, 768],
  huge: [1500, 768],
};

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-responsive-element', done);
  },

  'Displays the default element when contained within a parent of default size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/default`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Default');
  },

  'Displays the tiny element when contained within a parent of tiny size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/tiny`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Tiny');
  },

  'Displays the small element when contained within a parent of small size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/small`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Small');
  },

  'Displays the medium element when contained within a parent of medium size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/medium`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Medium');
  },

  'Displays the large element when contained within a parent of large size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/large`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Large');
  },

  'Displays the huge element when contained within a parent of huge size': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/huge`)
      .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Huge');
  },

  'Displays the correct element responsive to window size': (browser) => {
    const width = browser.globals.width;
    if (width < windowSizes.tiny[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Default');
    } else if (width >= windowSizes.tiny[0] && width < windowSizes.small[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Tiny');
    } else if (width >= windowSizes.small[0] && width < windowSizes.medium[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Small');
    } else if (width >= windowSizes.medium[0] && width < windowSizes.large[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Medium');
    } else if (width >= windowSizes.large[0] && width < windowSizes.huge[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Large');
    } else if (width >= windowSizes.huge[0]) {
      browser
        .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/responsive-element-tests/window-responsive`)
        .waitForElementVisible('.terra-ResponsiveElement > :first-child', 1000)
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Huge');
    }
  },
};
