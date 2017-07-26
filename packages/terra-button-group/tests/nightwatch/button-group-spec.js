/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
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
    browser.expect.element('#button-group-default').to.be.present;
  },
  'Displays a tiny Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/tiny-button-group`);
    browser.expect.element('#button-group-size-tiny button').text.to.equal('Tiny');
  },
  'Displays a small Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/small-button-group`);
    browser.expect.element('#button-group-size-small button').text.to.equal('Small');
  },
  'Displays a medium Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/medium-button-group`);
    browser.expect.element('#button-group-size-medium button').text.to.equal('Medium');
  },
  'Displays a large Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/large-button-group`);
    browser.expect.element('#button-group-size-large button').text.to.equal('Large');
  },
  'Displays a huge Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/huge-button-group`);
    browser.expect.element('#button-group-size-huge button').text.to.equal('Huge');
  },
  'Displays a compact Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/compact-button-group`);
    browser.expect.element('#button-group-compact button').text.to.equal('Compact');
  },
  'Displays a default Icon Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-default-button-group`);
    browser.expect.element('#button-group-icon-default button').text.to.equal('Icon');
  },
  'Displays a reversed Icon Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-reversed-button-group`);
    browser.expect.element('#button-group-icon-reversed button').text.to.equal('Icon Reversed');
  },
  'Displays an Icon Only Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/icon-only-button-group`);
  },
  'Displays a Default variant Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/default-variant-button-group`);
    browser.expect.element('#button-group-variant button').text.to.equal('Default');
  },
  'Displays a Secondary variant Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/secondary-variant-button-group`);
    browser.expect.element('#button-group-variant-secondary button').text.to.equal('Secondary');
  },
  'Displays a Selectable Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/selectable-button-group`);
    browser.expect.element('#button-group-selectable button').to.be.present;
  },
  'Triggers onChange for a Button Group': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/button-group-tests/on-change-button-group`);

    browser.sendKeys('#button-group-onchange button:nth-child(1)', browser.Keys.SPACE);
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(1)', 'aria-selected', 'true');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(2)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(3)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(4)', 'aria-selected', 'false');
    browser.assert.containsText('#selected-index', '0');

    browser.sendKeys('#button-group-onchange button:nth-child(2)', browser.Keys.SPACE);
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(1)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(2)', 'aria-selected', 'true');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(3)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(4)', 'aria-selected', 'false');
    browser.assert.containsText('#selected-index', '1');

    browser.sendKeys('#button-group-onchange button:nth-child(4)', browser.Keys.SPACE);
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(1)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(2)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(3)', 'aria-selected', 'false');
    browser.assert.attributeEquals('#button-group-onchange button:nth-child(4)', 'aria-selected', 'true');
    browser.assert.containsText('#selected-index', '3');
  },
};
