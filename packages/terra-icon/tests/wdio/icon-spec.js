/* global browser, Terra, before */
describe('Icon', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/icon/icon-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Append', () => {
    before(() => browser.url('/#/raw/tests/icon/icon-append-class'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Aria', () => {
    before(() => browser.url('/#/raw/tests/icon/icon-aria'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('HeightWidth', () => {
    before(() => browser.url('/#/raw/tests/icon/icon-height-width'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Bidi', () => {
    before(() => browser.url('/#/raw/tests/icon/icon-bidi'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
