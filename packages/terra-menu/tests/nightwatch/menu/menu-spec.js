/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default menu with expected content': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/default`);
    browser.click('#default-button');
    browser.expect.element('#TestContent').to.be.present;
  },
  'Displays a bounded menu with a header': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/bounded`);
    browser.click('#bounded-button');
    browser.expect.element('.TestBoundedContent div[class*="_header"] > div:last-child > button[class*="_header-button"]').to.be.present;
  },
  'Dipslay a back and a close button in header when submenu in a bounded menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/bounded`);
    browser.click('#bounded-button');
    browser.click('.TestNestedMenu');
    browser.expect.element('div[class*="content"]:nth-child(2) div[class*="header"] > div[class*="fill"] div[class*="_header-button"]').to.be.visible;
    browser.expect.element('div[class*="content"]:nth-child(2) div[class*="header"] > div:last-child > button[class*="_header-button"]').to.be.visible;
    browser.keys([browser.Keys.ESCAPE]);
  },
  'Displays a menu with a small calculated height': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/small`);
    browser.click('#small-menu-button');
    browser.expect.element('.TestFirstItem').to.be.visible;
    browser.expect.element('.TestLastItem').to.be.visible;
  },
  'Displays a menu with a medium calculated height': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/medium`);
    browser.click('#medium-menu-button');
    browser.expect.element('.TestFirstItem').to.be.visible;
    browser.expect.element('.TestLastItem').to.be.visible;
  },
  'Displays a menu with a large calculated height': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/large`);
    browser.click('#large-menu-button');
    browser.expect.element('.TestFirstItem').to.be.visible;
    browser.expect.element('.TestLastItem').to.be.visible;
  },
  'Displays a selectable menu when there are selectable and unselectable items': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/selectable-and-unselectable`);
    browser.click('#default-button');
    browser.expect.element('.TestNonSelectableItem svg[class*="_checkmark"]').to.not.be.visible;
    browser.expect.element('.TestSelectableItem svg[class*="_checkmark"]').to.not.be.visible;
  },
  'Displays a selectable menu item as selected when menu is closed after selection and then reopened': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/selectable-and-unselectable`);
    browser.click('#default-button');
    browser.click('.TestSelectableItem');
    browser.click('#default-button');
    browser.expect.element('.TestSelectableItem svg[class*="_checkmark"]').to.be.visible;
  },
  'Displays a non-selectable menu with apropriate spacing': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/non-selectable`);
    browser.click('#non-selectable-menu-button');
    browser.expect.element('.TestFirstItem svg[class*="_checkmark"]').to.not.be.present;
    browser.expect.element('.TestSecondItem svg[class*="_checkmark"]').to.not.be.present;
  },
  'Replaces menu with nested menu when an item with submenu content is clicked': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/submenu`);
    browser.click('#sub-menu-button');
    browser.click('.TestNestedMenu');
    browser.expect.element('.TestNestedMenuContent').to.be.present;
    browser.expect.element('div[class*="header"] > div:first-child div[class*="_header-button"]').to.be.visible;
    browser.expect.element('div[class*="header"] > div:last-child > button[class*="_header-button"]').to.not.be.present;
    browser.keys([browser.Keys.ESCAPE]);
  },
  'Menu can be navigated using arrow keys': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/submenu`);
    browser.click('#sub-menu-button');
    browser.expect.element('.TestInitialMenuContent').to.be.present;
    browser.sendKeys('.TestNestedMenu', [browser.Keys.ARROW_RIGHT]);
    browser.expect.element('.TestNestedMenuContent').to.be.present;
    browser.sendKeys('.TestNestedMenuContent', [browser.Keys.ARROW_LEFT]);
    browser.expect.element('.TestInitialMenuContent').to.be.visible;
  },
  'Menu should not do anything when left arrow is pressed on the first layer': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/submenu`);
    browser.click('#sub-menu-button');
    browser.expect.element('.TestInitialMenuContent').to.be.present;
    browser.sendKeys('.TestNestedMenu', [browser.Keys.LEFT_RIGHT]);
    browser.expect.element('.TestInitialMenuContent').to.be.present;
  },
  'Displays a selectable menu when there is one child': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-tests/selectable`);
    browser.click('#selectable-menu-button');
    browser.click('.TestGroupItem3');
    browser.expect.element('.TestGroupItem3 svg[class*="_checkmark"]').to.be.visible;
  },
});
