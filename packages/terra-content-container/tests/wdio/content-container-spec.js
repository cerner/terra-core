/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Content Container', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/content-container/default-content-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Fill', () => {
    beforeEach(() => browser.url('/#/raw/tests/content-container/fill-content-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
