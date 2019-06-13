/* global browser, Terra, before */
Terra.viewports('tiny', 'medium', 'large').forEach((viewport) => {
  describe('DropdownButton', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-dropdown-button/default-dropdown-button');
      });

      Terra.should.validateElement();
    });
  });
});
