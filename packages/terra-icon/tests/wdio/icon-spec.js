Terra.describeViewports('Icon', ['huge'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-default'));

    it('checks element', () => {
      Terra.validates.element('default');
    });
  });

  describe('HeightWidth', () => {
    it('checks element', () => {
      browser.url('/#/raw/tests/terra-icon/icon/icon-height-width');
      Terra.validates.element('height width');
    });
  });

  describe('Bidi', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-bidi'));

    it('checks element', () => {
      Terra.validates.element('bidi');
    });
  });

  describe('AriaLabel', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-aria-label'));

    it('is accessible', () => {
      Terra.validates.accessibility();
    });
  });

  describe('AllIcons', () => {
    before(() => browser.url('/#/raw/tests/terra-icon/icon/icon-all'));

    it('checks element', () => {
      Terra.validates.element('all icons');
    });
  });
});
