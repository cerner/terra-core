/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays default tabs': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);
    browser.expect.element('#defaultTabs').to.be.present;
  },
  'Displays first tab as active by default': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Tab 1');
    } else {
      browser.expect.element('#tab1[class*="is-active"]').to.be.present;
    }
  },
  'Displays content of selected tab': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);
    browser.expect.element('#tab1Content').to.be.present;
  },
  'Collapsed tabs menu displays label text of the active tab': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);
    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Tab 1');
      browser.click('div[class*="tab-menu"]');
      browser.click('#tab3');
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Tab 3');
    }
  },
  'Collapsed tabs menu closes when menu item is selected': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);
    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').to.be.present;
      browser.click('div[class*="tab-menu"]');
      browser.expect.element('#tab1').to.be.present;
      browser.click('#tab3');
      browser.expect.element('#tab1').to.not.be.present;
    }
  },
  'Arrow keys navigate through tabs when not collapsed': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/default`);
    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('#tab1').to.be.present;
      browser.click('#tab1');
      browser.expect.element('#tab1[class*="is-active"]').to.be.present;
      browser.keys([browser.Keys.ARROW_RIGHT]);
      browser.expect.element('#tab2[class*="is-active"]').to.be.present;
      browser.expect.element('#tab2Content').to.be.present;
      browser.keys([browser.Keys.ARROW_RIGHT]);
      browser.expect.element('#tab3Content').to.be.present;
      // Last tab, so right arrow should do nothing
      browser.keys([browser.Keys.ARROW_RIGHT]);
      browser.expect.element('#tab3Content').to.be.present;
      browser.keys([browser.Keys.ARROW_LEFT]);
      browser.expect.element('#tab2Content').to.be.present;
      browser.keys([browser.Keys.ARROW_LEFT]);
      browser.expect.element('#tab1Content').to.be.present;
      // First tab, so left arrow should do nothing
      browser.keys([browser.Keys.ARROW_LEFT]);
      browser.expect.element('#tab1Content').to.be.present;
    }
  },
  'Allows initial selected tab in controlled tabs': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/controlled`);
    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Tab 2');
    } else {
      browser.expect.element('#tab2[class*="is-active"]').to.be.present;
    }
    browser.expect.element('#tab2Content').to.be.present;
  },
  'Allows selection in controlled tabs': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/controlled`);

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').to.be.present;
      browser.click('div[class*="tab-menu"]');
      browser.expect.element('#tab1').to.be.present;
      browser.click('#tab1');
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Tab 1');
    } else {
      browser.expect.element('#tab1').to.be.present.before(2000);
      browser.click('#tab1');
      browser.expect.element('#tab1[class*="is-active"]').to.be.present.before(2000);
    }

    browser.expect.element('#current-selection').text.to.contain('Tab 1');
    browser.expect.element('#tab1Content').to.be.present;
  },
  'Collapses tabs appropriately': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/many-tabs`);

    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.large[0]) {
      browser.expect.element('#tab12').to.be.present;
    } else if (width > browser.globals.breakpoints.medium[0]) {
      browser.expect.element('#tab12').to.not.be.present;
      browser.expect.element('#tab11').to.not.be.present;
      browser.expect.element('#tab10').to.not.be.present;
      browser.expect.element('#tab9').to.be.present;
      browser.expect.element('div[class*="tab-menu"]').to.be.present;
    } else if (width > browser.globals.breakpoints.small[0]) {
      browser.expect.element('#tab12').to.not.be.present;
      browser.expect.element('#tab11').to.not.be.present;
      browser.expect.element('#tab10').to.not.be.present;
      browser.expect.element('#tab9').to.not.be.present;
      browser.expect.element('#tab8').to.not.be.present;
      browser.expect.element('#tab7').to.be.present;
      browser.expect.element('div[class*="tab-menu"]').to.be.present;
    } else if (width > browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('#tab12').to.not.be.present;
      browser.expect.element('#tab11').to.not.be.present;
      browser.expect.element('#tab10').to.not.be.present;
      browser.expect.element('#tab9').to.not.be.present;
      browser.expect.element('#tab8').to.not.be.present;
      browser.expect.element('#tab7').to.not.be.present;
      browser.expect.element('#tab6').to.not.be.present;
      browser.expect.element('#tab5').to.be.present;
      browser.expect.element('div[class*="tab-menu"]').to.be.present;
    }
  },
  'Indicates when any tab label has truncated': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/many-tabs`);
    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.huge[0]) {
      browser.expect.element('#tab1Content .truncationHeader').to.not.be.present;
    } else if (width > browser.globals.breakpoints.large[0]) {
      browser.expect.element('#tab1Content .truncationHeader').to.be.present;
    }
  },
  'Indicates that any tab is icon only': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/icon-only`);
    browser.expect.element('#iconOnlyTabs').to.be.present;
    const width = screenWidth(browser);
    if (width > browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('#searchContent .truncationHeader').to.be.present;
    }
  },
  'Displays label text for icon only tabs when in menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/tabs-tests/icon-only`);
    browser.expect.element('#iconOnlyTabs').to.be.present;
    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="tab-menu"]').text.to.contain('Search');
    }
  },
});
