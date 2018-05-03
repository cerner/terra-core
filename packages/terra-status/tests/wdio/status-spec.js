/* global browser, Terra, before */

describe('Status', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/status/status-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Arrange', () => {
    before(() => browser.url('/#/raw/tests/status/status-arrange'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Icon', () => {
    before(() => browser.url('/#/raw/tests/status/status-icon'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/status/status-image'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('No color', () => {
    before(() => browser.url('/#/raw/tests/status/status-no-color'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
