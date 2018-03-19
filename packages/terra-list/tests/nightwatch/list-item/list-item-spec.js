// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default list item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/list-item/default-list-item`)
      .assert.elementPresent('li');
  },

  'Displays a selected list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/list-item/selected-list-item`);
    browser.expect.element('li').to.have.attribute('class').which.contains('selected');
  },

  'Displays a selectable list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/list-item/selectable-list-item`);
    browser.expect.element('li').to.have.attribute('class').which.contains('is-selectable');
  },

  'Displays a chevron list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/list/list-item/chevron-list-item`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays a content for list item with the provided content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/list/list-item/default-list-item`)
      .assert.containsText('li p:nth-child(1)', 'test content');
  },
});
