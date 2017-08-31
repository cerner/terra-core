// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default list item': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list-item-tests/default`)
      .assert.elementPresent('li');
  },

  'Displays a selected list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list-item-tests/selected`);
    browser.expect.element('li').to.have.attribute('class').which.contains('selected');
  },

  'Displays a selectable list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list-item-tests/selectable`);
    browser.expect.element('li').to.have.attribute('class').which.contains('is-selectable');
  },

  'Displays a chevron list item': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/list-item-tests/chevron`);
    browser.expect.element('li span').to.have.attribute('class').which.contains('chevron');
  },

  'Displays a content for list item with the provided content': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/list-item-tests/default`)
      .assert.containsText('li p:nth-child(1)', 'test content');
  },
});
