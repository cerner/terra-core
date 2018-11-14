describe('Icon', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('HeightWidth', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-height-width'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Bidi', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-bidi'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('AriaLabel', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-aria-label'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
