/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium', 'large');

viewports.forEach((viewport) => {
  describe('ActionHeaderContainer', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Borderless', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/borderless-action-header-container'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});
