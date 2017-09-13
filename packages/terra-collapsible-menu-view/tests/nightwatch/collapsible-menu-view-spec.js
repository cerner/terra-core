/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a collapsible menu displays appropriately on all screen sizes': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/collapsible-menu-view-tests/default`);

    const width = screenWidth(browser);
    // When there is enough space all elements should show and there should not be a ... menu
    if (width > browser.globals.breakpoints.large[0]) {
      browser.expect.element('div[class*="menu-button"]').to.not.be.visible;
      browser.expect.element('.ToggleItem1').to.be.present;
      browser.expect.element('.ToggleItem2').to.be.present;
      browser.expect.element('.MenuButton1').to.be.present;
      browser.expect.element('.MenuButton2').to.be.present;
      browser.expect.element('.ViewTypeGroup').to.be.present;
      browser.expect.element('.MessageActionGroup').to.be.present;
      browser.expect.element('.Button1').to.be.present;
      browser.expect.element('.Button2').to.be.present;
      browser.expect.element('.Button3').to.be.present;
      browser.expect.element('.Button4').to.be.present;
    /* When there is not enough space for all the elements the ... menu should be visible and all items that
     could not fit face-up should be available in the menu */
    } else if (width > browser.globals.breakpoints.medium[0]) {
      browser.expect.element('div[class*="menu-button"]').to.be.visible;
      browser.expect.element('.ToggleItem1').to.be.present;
      browser.expect.element('.ToggleItem2').to.be.present;
      browser.expect.element('.MenuButton1').to.be.present;
      browser.expect.element('.MenuButton2').to.be.present;
      browser.expect.element('.ViewTypeGroup').to.be.present;
      browser.expect.element('.MessageActionGroup').to.be.present;
      browser.expect.element('.Button1').to.be.present;
      browser.expect.element('.Button2').to.be.present;
      browser.expect.element('.Button3').to.not.be.present;
      browser.expect.element('.Button4').to.not.be.present;
      browser.click('div[class*="menu-button"]');
      browser.expect.element('.Button3').to.be.present;
      browser.expect.element('.Button4').to.be.present;
    } else if (width > browser.globals.breakpoints.small[0]) {
      browser.expect.element('div[class*="menu-button"]').to.be.visible;
      browser.expect.element('.ToggleItem1').to.be.present;
      browser.expect.element('.ToggleItem2').to.be.present;
      browser.expect.element('.MenuButton1').to.be.present;
      browser.expect.element('.MenuButton2').to.be.present;
      browser.expect.element('.ViewTypeGroup').to.be.present;
      browser.expect.element('.MessageActionGroup').to.be.present;
      browser.expect.element('.Button1').to.not.be.present;
      browser.expect.element('.Button2').to.not.be.present;
      browser.expect.element('.Button3').to.not.be.present;
      browser.expect.element('.Button4').to.not.be.present;
      browser.click('div[class*="menu-button"]');
      browser.expect.element('.Button1').to.be.present;
      browser.expect.element('.Button2').to.be.present;
      browser.expect.element('.Button3').to.be.present;
      browser.expect.element('.Button4').to.be.present;
    } else if (width > browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="menu-button"]').to.be.visible;
      browser.expect.element('.ToggleItem1').to.be.present;
      browser.expect.element('.ToggleItem2').to.be.present;
      browser.expect.element('.MenuButton1').to.be.present;
      browser.expect.element('.MenuButton2').to.be.present;
      browser.expect.element('.ViewTypeGroup').to.not.be.present;
      browser.expect.element('.MessageActionGroup').to.not.be.present;
      browser.expect.element('.Button1').to.not.be.present;
      browser.expect.element('.Button2').to.not.be.present;
      browser.expect.element('.Button3').to.not.be.present;
      browser.expect.element('.Button4').to.not.be.present;
      browser.click('div[class*="menu-button"]');
      browser.expect.element('.ViewTypeGroup').to.be.present;
      browser.expect.element('.MessageActionGroup').to.be.present;
      browser.expect.element('.Button1').to.be.present;
      browser.expect.element('.Button2').to.be.present;
      browser.expect.element('.Button3').to.be.present;
      browser.expect.element('.Button4').to.be.present;
    } else if (width <= browser.globals.breakpoints.tiny[0]) {
      browser.expect.element('div[class*="menu-button"]').to.be.visible;
      browser.expect.element('.ToggleItem1').to.be.present;
      browser.expect.element('.ToggleItem2').to.be.present;
      browser.expect.element('.MenuButton1').to.be.present;
      browser.expect.element('.MenuButton2').to.not.be.present;
      browser.expect.element('.ViewTypeGroup').to.not.be.present;
      browser.expect.element('.MessageActionGroup').to.not.be.present;
      browser.expect.element('.Button1').to.not.be.present;
      browser.expect.element('.Button2').to.not.be.present;
      browser.expect.element('.Button3').to.not.be.present;
      browser.expect.element('.Button4').to.not.be.present;
      browser.click('div[class*="menu-button"]');
      browser.expect.element('.MenuButton2').to.be.present;
      browser.expect.element('.ViewTypeGroup').to.be.present;
      browser.expect.element('.MessageActionGroup').to.be.present;
      browser.expect.element('.Button1').to.be.present;
      browser.expect.element('.Button2').to.be.present;
      browser.expect.element('.Button3').to.be.present;
      browser.expect.element('.Button4').to.be.present;
    }
  },
});
