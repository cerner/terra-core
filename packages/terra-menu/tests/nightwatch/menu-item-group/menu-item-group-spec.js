// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default item group': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/menu/menu-item-group/menu-item-group-default`)
      .assert.elementPresent('.TestGroup')
      .assert.elementPresent('.TestGroupItem1')
      .assert.elementPresent('.TestGroupItem2')
      .assert.elementPresent('.TestGroupItem3');
  },
  'Items in the item group are selectable': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/menu/menu-item-group/menu-item-group-default`)
      .click('.TestGroupItem3')
      .assert.visible('.TestGroupItem3 svg[class*="_checkmark"]')
      .assert.containsText('#selected-index', '2')
      .click('.TestGroupItem1')
      .assert.visible('.TestGroupItem1 svg[class*="_checkmark"]')
      .assert.hidden('.TestGroupItem3 svg[class*="_checkmark"]')
      .assert.containsText('#selected-index', '0')
      .keys([browser.Keys.TAB])
      .keys([browser.Keys.ENTER])
      .assert.containsText('#selected-index', '1')
      .keys([browser.Keys.TAB])
      .keys([browser.Keys.SPACE])
      .assert.containsText('#selected-index', '2');
  },
});
