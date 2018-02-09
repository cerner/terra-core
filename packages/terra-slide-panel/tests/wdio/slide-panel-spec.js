/* global browser, Terra, before */

describe('Toggle the slide panel and hidden styles', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/tests/slide-panel-tests/toggle');
  });

  Terra.should.matchScreenshot();
});
