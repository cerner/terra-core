Terra.describeViewports('Toolbar', ['tiny'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toolbar/toolbar/default-toolbar'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
  describe('Start Align', () => {
    before(() => browser.url('/#/raw/tests/terra-toolbar/toolbar/start-align-toolbar'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
  describe('End Align', () => {
    before(() => browser.url('/#/raw/tests/terra-toolbar/toolbar/end-align-toolbar'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
  describe('Center Align', () => {
    before(() => browser.url('/#/raw/tests/terra-toolbar/toolbar/center-align-toolbar'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});

Terra.describeViewports('Toolbar', ['tiny', 'medium', 'large'], () => {
  describe('Long Content', () => {
    before(() => browser.url('/#/raw/tests/terra-toolbar/toolbar/long-button-toolbar'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
