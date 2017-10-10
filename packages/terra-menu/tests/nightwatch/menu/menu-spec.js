/* eslint-disable no-unused-expressions */
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
      .click('.TestNestedMenu');
    browser.waitForElementPresent('[class*="slide-group"] > div > div[class*="slide"]:not([class*="enter-active"]):nth-child(2)', 2000);

    browser.assert.elementPresent('div[class*="slide"]:nth-child(2) div[class*="header"] > div[class*="fill"] div[class*="_header-button"]')
      .assert.elementPresent('div[class*="slide"]:nth-child(2) div[class*="_header"] > div:last-child > button[class*="_header-button"]')
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
  'Displays a selectable menu when there are selectable and unselectable items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/selectable-and-unselectable`)
      .assert.hidden('.TestNonSelectableItem svg[class*="_checkmark"]')
      .assert.hidden('.TestSelectableItem svg[class*="_checkmark"]');
  },
  'Displays a selectable menu item as selected when menu is closed after selection and then reopened': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/selectable-and-unselectable`);
    browser.click('.TestSelectableItem');
    browser.click('#default-button');
    browser.expect.element('.TestSelectableItem svg[class*="_checkmark"]').to.be.visible;
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
  'Menu can be navigated using arrow keys': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/submenu`);
    browser.expect.element('.TestInitialMenuContent').to.be.present;
    browser.sendKeys('.TestNestedMenu', [browser.Keys.ARROW_RIGHT]);
    browser.expect.element('.TestNestedMenuContent').to.be.present;
    browser.sendKeys('.TestNestedMenuContent', [browser.Keys.ARROW_LEFT]);
    browser.expect.element('.TestInitialMenuContent').to.be.visible;
  },
  'Displays a selectable menu when there is one child': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-tests/selectable`)
      .click('.TestGroupItem3');
    browser.expect.element('.TestGroupItem3 svg[class*="_checkmark"]').to.be.visible;
  },
});
