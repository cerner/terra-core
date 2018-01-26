// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/list/default-list`)
      .assert.elementPresent('#example-list');
  },

  'Displays items in the list': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/list/default-list`)
      .assert.containsText('#example-list > [class*="list-item"]:nth-child(1)', 'test 1')
      .assert.containsText('#example-list > [class*="list-item"]:nth-child(2)', 'test 2')
      .assert.containsText('#example-list > [class*="list-item"]:nth-child(3)', 'test 3');
  },

  'Displays a divided list': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list/list/items-divided-list`);
    browser.expect.element('#example-list').to.have.attribute('class').which.contains('divided');
  },

  'Displays a list with one item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/list/list-one-item`)
      .assert.elementPresent('#example-list');
  },

  'Displays a list with no items': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list/list/list-no-items`)
      .assert.elementPresent('#example-list');
  },
});
