/* global browser, Terra, before */

describe('Large size squished slide panel', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  beforeEach(() => {
    browser.url('/#/tests/slide-panel-tests/behavior-squish-size-large');
  });

  Terra.should.matchScreenshot();
  Terra.should.beAccessible();
  Terra.should.themeEachCustomProperty({
    '--terra-slide-panel-panel-width-large-scalar': '0.8',
  });
});
