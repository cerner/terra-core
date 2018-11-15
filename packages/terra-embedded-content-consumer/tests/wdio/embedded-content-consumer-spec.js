/* global $ */
const viewports = Terra.viewports('tiny', 'large');

describe('Embedded Content Consumer', () => {
  describe('default', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/basic-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('fill', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/fill-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('on-ready', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/on-ready-consumer');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-event', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-event-consumer');
      browser.waitForExist('#CustomEvent');
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('custom-events', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/custom-events-consumer');
      browser.waitForExist('#CustomEvents');

      // Waiting for events to execute.
      browser.pause(5000);
    });

    Terra.should.matchScreenshot({ viewports });
  });

  describe('data-status', () => {
    before(() => {
      browser.url('#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/consumers/data-status-consumer');
    });

    it('has mounted, launched, and authorized elements', () => {
      const timeout = browser.options.waitforTimeout + 2000;
      browser.waitForExist('iframe[src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]', timeout);

      const myFrame = $('iframe[src="#/raw/tests/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"]').value;
      browser.frame(myFrame);

      expect(browser.isExisting('#Mounted'));
      expect(browser.isExisting('#Launched'));
      expect(browser.isExisting('#Authorized'));
    });
  });
});
