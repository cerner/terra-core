/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-button-group', done);
  },

  'Displays a default empty Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/default-button-group`);
    browser.expect.element('.terra-ButtonGroup').to.be.present;
  },
  'Displays a tiny Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/tiny-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Tiny');
  },
  'Displays a small Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/small-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Small');
  },
  'Displays a medium Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/medium-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Medium');
  },
  'Displays a large Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/large-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Large');
  },
  'Displays a huge Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/huge-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Huge');
  },
  'Displays a compact Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/compact-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Compact');
  },
  'Displays a default Icon Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-default-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Icon');
  },
  'Displays a reversed Icon Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-reversed-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Icon Reversed');
  },
  'Displays an Icon Only Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-only-button-group`);
  },
  'Displays a Default variant Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/default-variant-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Default');
  },
  'Displays a Secondary variant Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/secondary-variant-button-group`);
    browser.expect.element('.terra-ButtonGroupButton').text.to.equal('Secondary');
  },
  'Displays a Secondary Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/selectable-button-group`);
    browser.expect.element('.terra-ButtonGroupButton.is-active').to.be.present;
  },
  'Triggers onChange for a Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/on-change-button-group`);

    browser.sendKeys('.terra-ButtonGroupButton:nth-child(1)', browser.Keys.SPACE);
    browser.assert.cssClassPresent('.terra-ButtonGroupButton:nth-child(1)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(2)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(3)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(4)', 'is-active');
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('.terra-ButtonGroupButton:nth-child(2)', browser.Keys.ENTER);
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(1)', 'is-active');
    browser.assert.cssClassPresent('.terra-ButtonGroupButton:nth-child(2)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(3)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(4)', 'is-active');
    browser.assert.containsText('#selected-index', '1');

    browser.click('.terra-ButtonGroupButton:nth-child(4)');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(1)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(2)', 'is-active');
    browser.assert.cssClassNotPresent('.terra-ButtonGroupButton:nth-child(3)', 'is-active');
    browser.assert.cssClassPresent('.terra-ButtonGroupButton:nth-child(4)', 'is-active');
    browser.assert.containsText('#selected-index', '3');
  },
};
