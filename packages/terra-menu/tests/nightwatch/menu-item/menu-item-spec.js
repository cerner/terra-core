/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
 // eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-menu-item', done);
  },

  'Displays a default Menu.item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-tests/default`)
      .assert.elementPresent('.TestMenuItem')
      .assert.containsText('.TestMenuItem', 'DefaultMenuItem');
  },

  'Displays a Menu.item with wrapped text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-tests/wrapped-text`)
      .assert.elementPresent('.testWrappedItem')
      .assert.cssProperty('.testWrappedItem', 'overflow', 'visible')
      .assert.containsText('.testWrappedItem', 'This menu item has a really long text that should wrap.');
  },
  'Displays a Selectable Menu.Item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-tests/selectable`)
      .assert.elementPresent('.TestSelectableItem')
      .click('.TestSelectableItem')
      .assert.visible('.TestSelectableItem svg[class*="_checkmark"]')
      .assert.containsText('#isSelected', 'yes')
      .click('.TestSelectableItem')
      .assert.hidden('.TestSelectableItem svg[class*="_checkmark"]')
      .assert.containsText('#isSelected', 'no')
      .keys([browser.Keys.ENTER])
      .assert.containsText('#isSelected', 'yes')
      .keys([browser.Keys.SPACE])
      .assert.containsText('#isSelected', 'no');
  },
  'Displays a Menu.Item with a submenu indicator': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-tests/submenu`)
      .assert.elementPresent('.TestSubMenuItem')
      .assert.elementPresent('.TestSubMenuItem svg[class*="_chevron"]');
  },
  'Triggers onClick for Menu.Item': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/menu-item-tests/on-click`)
      .assert.containsText('#clickNumber', '0')
      .click('.TestOnClickItem')
      .assert.containsText('#clickNumber', '1');
  },
};
