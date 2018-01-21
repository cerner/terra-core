/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default Menu.item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-item-tests/default`)
      .assert.elementPresent('.TestMenuItem')
      .assert.containsText('.TestMenuItem', 'DefaultMenuItem');
  },

  'Displays a Menu.item with wrapped text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-item-tests/wrapped-text`)
      .assert.elementPresent('.testWrappedItem')
      .assert.cssProperty('.testWrappedItem', 'overflow', 'visible')
      .assert.containsText('.testWrappedItem', 'This menu item has a really long text that should wrap.');
  },
  'Displays a Selectable Menu.Item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-item-tests/selectable`)
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
      .url(`${browser.launchUrl}/#/tests/menu-item-tests/submenu`)
      .assert.elementPresent('.TestSubMenuItem')
      .assert.elementPresent('.TestSubMenuItem svg[class*="_chevron"]');
  },
  'Triggers onClick for Menu.Item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/menu-item-tests/on-click`)
      .assert.containsText('#clickNumber', '0')
      .click('.TestOnClickItem')
      .assert.containsText('#clickNumber', '1');
    browser.sendKeys('.TestOnClickItem', [browser.Keys.ENTER]);
    browser.expect.element('#clickNumber').text.to.contain('2');
    browser.sendKeys('.TestOnClickItem', [browser.Keys.SPACE]);
    browser.expect.element('#clickNumber').text.to.contain('3');
  },
  'Disables a Menu.Item when indicated': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/menu-item-tests/disabled`);
    browser.expect.element('.TestDisabledItem').to.be.present;
    browser.expect.element('.TestDisabledItem svg[class*="_checkmark"]').to.not.be.visible;
    browser.click('.TestDisabledItem');
    browser.expect.element('.TestDisabledItem svg[class*="_checkmark"]').to.not.be.visible;
  },
});
