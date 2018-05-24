/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Opens and closes a modal correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-open`);
    console.log('url', `${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-open`);
    browser.waitForElementPresent('.button-open-modal', 5000);
    browser.expect.element('.button-open-modal').to.be.present;
    browser.expect.element('div[role="document"]').to.not.be.present;

    browser.click('.button-open-modal')
      .expect.element('div[role="document"]').to.be.present;
    browser.keys([browser.Keys.ESCAPE])
      .expect.element('[class*="ModalOverlay"]').to.not.be.present;
    browser.expect.element('div[role="document"]').to.not.be.present;
  },

  'Displays a fullscreen modal': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen`)
      .expect.element('div[role="document"]').to.be.present;
  },

  'Displays a non-fullscreen modal': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc`)
      .expect.element('div[role="document"]').to.be.present;
  },

  'Closes a modal on outside click': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen`);
    browser.expect.element('div[role="document"]').to.be.present;

    // Using click command will click the center of the overlay (which is the modal content)
    browser
       .moveToElement('[class*="ModalOverlay"]', 235, 5)
       .mouseButtonDown('left')
       .mouseButtonUp('left');

    browser.expect.element('[class*="ModalOverlay"]').to.not.be.present;
    browser.expect.element('div[role="document"]').to.not.be.present;
  },

  'Does not close a modal on outside click when close on outside click is disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-outside-click`);
    browser.expect.element('div[role="document"]').to.be.present;

    browser
       .moveToElement('[class*="ModalOverlay"]', 235, 5)
       .mouseButtonDown('left')
       .mouseButtonUp('left');
    browser.expect.element('div[role="document"]').to.be.present;
  },

  'Does not close a modal on ESC when close on ESC is disabled ': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-disable-close-on-esc`);
    browser.expect.element('div[role="document"]').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.expect.element('div[role="document"]').to.be.present;
  },

  'Closes a modal on ESC': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen`);
    browser.expect.element('div[role="document"]').to.be.present;

    browser.keys([browser.Keys.ESCAPE]);
    browser.expect.element('div[role="document"]').to.not.be.present;
  },

  'Sets the ariaLabel on the modal': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen`)
      .expect.element('div[aria-label="Terra Modal"]').to.be.present;
  },

  'Sets the default role default value to document': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-is-fullscreen`)
      .expect.element('div[role="document"]').to.be.present;
  },

  'Overrides the default role value': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-override-role`)
      .expect.element('div[role="button"]').to.be.present;
  },

  'Appends a css class to the modal': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class`)
      .expect.element('div[role="document"]').to.have.attribute('class').which.contains('modal-custom-class');
  },

  'Appends a css class to the overlay': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-append-class`)
      .expect.element('[class*="ModalOverlay"]').to.have.attribute('class').which.contains('overlay-custom-class');
  },

  'Displays with a content overflow example': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow`)
      .expect.element('#modal-overflow').to.be.present;
  },

  'Displays a modal that is focusable': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-no-focusable-content`)
      .expect.element('div[role="document"]').to.have.attribute('tabindex').which.equals('0');
  },

  'Verifies background does not scroll when modal is open': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-content-overflow`);
    browser.expect.element('html').to.have.attribute('style').which.equals('overflow: hidden;');

    browser
       .moveToElement('[class*="ModalOverlay"]', 235, 5)
       .mouseButtonDown('left')
       .mouseButtonUp('left');
    browser.expect.element('div[role="document"]').to.not.be.present;
    browser.expect.element('html').to.have.attribute('style').which.equals('');
  },

  'Appends custom props': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/terra-abstract-modal/abstract-modal/abstract-modal-custom-props`)
      .expect.element('div[role="document"]').to.have.attribute('id').which.equals('custom-props');
  },
});
