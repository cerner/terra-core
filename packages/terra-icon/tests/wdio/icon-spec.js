Terra.describeViewports('Icon', ['huge'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-default'));

    Terra.it.validatesElement();
  });

  describe('HeightWidth', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-height-width'));

    Terra.it.validatesElement();
  });

  describe('Bidi', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-bidi'));

    Terra.it.validatesElement();
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
