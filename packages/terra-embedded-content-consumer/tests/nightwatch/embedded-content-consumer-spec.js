/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a provider embedded in the consumer that contains title text.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/basic-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/basic-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Identify the embedded iframe.
    .element('css selector', `iframe[src*="${providerSrc}"]`, (frame) => {
      browser.frame({ ELEMENT: frame.value.ELEMENT }, () => {
        // Validate the provider has been accurately loaded.
        browser.expect.element('h1').text.to.equal('Basic content');
      });
    // Reset the frame back to the parent frame.
    }).frame(null);
  },

  'Displays a provider embedded in the consumer expanded to fill the parent.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/fill-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/fill-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    .getElementSize('div[class="xfc"]', (parentContainer) => {
      browser.getElementSize(`iframe[src*="${providerSrc}"]`, (frame) => {
        // Validate the provider expanded to fill the parent.
        browser.assert.equal(frame.value.height, parentContainer.value.height);
        browser.assert.equal(frame.value.width, parentContainer.value.width);
      });
    });
  },

  'Displays a provider embedded in the consumer that triggers after initialization is complete.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/on-ready-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/on-ready-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider application.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Identify the embedded iframe.
    .element('css selector', `iframe[src*="${providerSrc}"]`, (frame) => {
      browser.frame({ ELEMENT: frame.value.ELEMENT }, () => {
        // Validate the provider has been accurately loaded.
        browser.expect.element('h1').text.to.equal('On Ready Events');
        // Validate the provider after onReady is invoked.
        browser.expect.element('p#ready').text.to.equal('onReady function being executed after the consumer has been authorized.');
      });
    // Reset the frame back to the parent frame.
    }).frame(null);
  },

  'Displays a provider embedded in the consumer that triggers a custom event.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/custom-event-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/custom-event-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider application.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Validate the provider after the custom event handler is invoked.
    .expect.element('div#CustomEvent').to.have.css('border').which.equals('5px dashed rgb(0, 0, 255)');
  },

  'Displays a provider embedded in the consumer that triggers multiple custom event.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/custom-events-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/custom-events-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider application.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Validate the provider before the custom event handler is invoked.
    // Validate the provider after the custom event handler is invoked.
    .expect.element('div#CustomEvents').to.have.css('border').which.equals('5px dashed rgb(0, 0, 255)');
    // Pause the test briefly till the second custom handler is invoked.
    browser.pause(1000)
    // Validate the provider after the second custom event handler is invoked.
    .expect.element('div#CustomEvents').to.have.css('border').which.equals('5px dashed rgb(0, 255, 0)');
  },

  'Displays the consumer life cycle status.': (browser) => {
    const consumerSrc = '#/tests/embedded-content-consumer-tests/data-status-consumer';
    const providerSrc = '#/tests/embedded-content-consumer-tests/data-status-provider';

    browser.url(`${browser.launchUrl}/${consumerSrc}`)
    // Wait for the consumer to load the provider application.
    .waitForElementPresent(`iframe[src*="${providerSrc}"]`, 1000)
    // Identify the embedded iframe.
    .element('css selector', `iframe[src*="${providerSrc}"]`, (frame) => {
      browser.frame({ ELEMENT: frame.value.ELEMENT }, () => {
        // Validate the lifecycle has completed.
        browser.assert.elementPresent('li#Mounted');
        browser.assert.elementPresent('li#Launched');
        browser.assert.elementPresent('li#Authorized');
      });
    // Reset the frame back to the parent frame.
    }).frame(null);
  },
});
