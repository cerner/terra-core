/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Status', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/status/status-default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Arrange', () => {
    beforeEach(() => browser.url('/#/raw/tests/status/status-arrange'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Icon', () => {
    beforeEach(() => browser.url('/#/raw/tests/status/status-icon'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Image', () => {
    beforeEach(() => browser.url('/#/raw/tests/status/status-image'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('No color', () => {
    beforeEach(() => browser.url('/#/raw/tests/status/status-no-color'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
