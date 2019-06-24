describe('Icon', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-default'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('HeightWidth', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-height-width'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Bidi', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-bidi'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('AriaLabel', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-aria-label'));

    Terra.it.isAccessible();
  });
  describe('AllIcons', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-all'));

    Terra.it.validatesElement();
  });
});
