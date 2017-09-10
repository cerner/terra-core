 // eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default menu with expected content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/default`)
      .assert.elementPresent('#TestContent');
  },
  'Displays a bounded menu with a header': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/bounded`)
      .assert.elementPresent('.TestBoundedContent div[class*="_header"] > div:last-child > button[class*="_header-button"]');
  },
  'Dipslay a back and a close button in header when submenu in a bounded menu': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/bounded`)
      .click('.TestNestedMenu')
      .assert.visible('.TestBoundedContent div[class*="_header"] > div:first-child div[class*="_header-button"]')
      .assert.visible('.TestBoundedContent div[class*="_header"] > div:last-child > button[class*="_header-button"]')
      .keys([browser.Keys.ESCAPE]);
  },
  'Displays a menu with a small calculated height': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/small`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a menu with a medium calculated height': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/medium`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a menu with a large calculated height': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/large`)
      .assert.visible('.TestFirstItem')
      .assert.visible('.TestLastItem');
  },
  'Displays a selectable menu with apropriate spacing': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/selectable`)
      .assert.hidden('.TestNonSelectableItem svg[class*="_checkmark"]')
      .assert.hidden('.TestSelectableItem svg[class*="_checkmark"]');
  },
  'Displays a non-selectable menu with apropriate spacing': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/non-selectable`)
      .assert.elementNotPresent('.TestFirstItem svg[class*="_checkmark"]')
      .assert.elementNotPresent('.TestSecondItem svg[class*="_checkmark"]');
  },
  'Replaces menu with nested menu when an item with submenu content is clicked': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/submenu`)
      .click('.TestNestedMenu')
      .assert.elementPresent('.TestNestedMenuContent')
      .assert.visible('div[class*="_header"] > div:first-child div[class*="_header-button"]')
      .assert.hidden('div[class*="_header"] > div:last-child > button[class*="_header-button"]')
      .keys([browser.Keys.ESCAPE]);
  },
});
