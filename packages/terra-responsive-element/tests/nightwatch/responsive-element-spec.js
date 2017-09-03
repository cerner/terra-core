// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays the default element when contained within a parent of default size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/default`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Default');
  },

  'Displays the tiny element when contained within a parent of tiny size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/tiny`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Tiny');
  },

  'Displays the small element when contained within a parent of small size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/small`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Small');
  },

  'Displays the medium element when contained within a parent of medium size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/medium`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Medium');
  },

  'Displays the large element when contained within a parent of large size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/large`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Large');
  },

  'Displays the huge element when contained within a parent of huge size': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/responsive-element-tests/huge`)
      .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Huge');
  },

  'Displays the correct element responsive to window size': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/responsive-element-tests/window-responsive`);

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Default');
    } else if (width > browser.globals.breakpoints.tiny[0] && width <= browser.globals.breakpoints.small[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Tiny');
    } else if (width > browser.globals.breakpoints.small[0] && width <= browser.globals.breakpoints.medium[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Small');
    } else if (width > browser.globals.breakpoints.medium[0] && width <= browser.globals.breakpoints.large[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Medium');
    } else if (width > browser.globals.breakpoints.large[0] && width <= browser.globals.breakpoints.huge[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Large');
    } else if (width > browser.globals.breakpoints.huge[0]) {
      browser
        .expect.element('.terra-ResponsiveElement > :first-child').text.to.equal('Huge');
    }
  },
});
