/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-props-table', done);
  },

  'Displays a props table': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.elementPresent('[class*="markdown-body"]');
  },

  'Displays props table with default title': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('[class*="markdown-body"] > h2', 'Props');
  },

  'Displays props table with component title': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/title`)
      .assert.elementPresent('[class*="markdown-body"] > h2', 'Mock Component Props');
  },

  'Displays a string prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(1) > td:nth-child(1)', 'string')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(1) > td:nth-child(2)', 'string');
  },

  'Displays a number prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(2) > td:nth-child(1)', 'number')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(2) > td:nth-child(2)', 'number');
  },

  'Displays a boolean prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(3) > td:nth-child(1)', 'bool')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(3) > td:nth-child(2)', 'bool');
  },

  'Displays a element prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(4) > td:nth-child(1)', 'element')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(4) > td:nth-child(2)', 'element');
  },

  'Displays a node prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(5) > td:nth-child(1)', 'node')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(5) > td:nth-child(2)', 'node');
  },

  'Displays a array prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(6) > td:nth-child(1)', 'array')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(6) > td:nth-child(2)', 'array');
  },

  'Displays a defualt arrayOf prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(7) > td:nth-child(1)', 'arrayOfDefault')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(7) > td:nth-child(2)', 'array of elements');
  },

  'Displays a arrayOf(shapes) prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(8) > td:nth-child(1)', 'arrayOfShapes')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(8) > td:nth-child(2)', 'array of objects structured like: { "stringProp": { "name": "string", "required": false } }');
  },

  'Displays a oneOfType prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(9) > td:nth-child(1)', 'oneOfType')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(9) > td:nth-child(2)', 'string or number or an object structured like: { "stringProp": { "name": "string", "required": false } }');
  },

  'Displays a shape prop correctly': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/props-table-tests/default`)
      .assert.containsText('#PropsTable > tbody > tr:nth-child(10) > td:nth-child(1)', 'shape')
      .assert.containsText('#PropsTable > tbody > tr:nth-child(10) > td:nth-child(2)', 'an object structured like: { "stringProp": { "name": "string", "required": false }, "numberProp": { "name": "number", "required": false } }');
  },
};
