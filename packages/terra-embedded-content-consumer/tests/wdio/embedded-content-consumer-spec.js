/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'large');

describe('Embedded Content Consumer', () => {
  describe('default', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('fill', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/fill-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('on-ready', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/on-ready-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-event', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
    });

    var customEventElement = $('#CustomEvent');

    browser.waitUntil(() => customEventElement.getCssProperty('border').value === 'thick dashed #0000FF', 5000, 'expected border to be set but timed out');

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-events', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
    });

    var customEventElement = $('#CustomEvents');

    browser.waitUntil(() => customEventElement.getCssProperty('border').value === 'thick dashed #0000FF', 5000, 'expected border to be set but timed out');
    browser.waitUntil(() => customEventElement.getCssProperty('border').value === 'thick dashed #00FF00', 5000, 'expected border to be updated but timed out');

    Terra.should.matchScreenshot({ viewports });
  });

  describe('data-status', () => {
    beforeEach(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
    });

    browser.waitUntil(() => browser.isExisting('li#Mounted'), 5000, 'expected mounted element to be present');
    browser.waitUntil(() => browser.isExisting('li#Launched'), 5000, 'expected launched element to be present');
    browser.waitUntil(() => browser.isExisting('li#Authorized'), 5000, 'expected authorized element to be present');

    Terra.should.matchScreenshot({ viewports });
  });
});