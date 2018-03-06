/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('CenteredActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/empty-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-action-footer-background-color': '#f00',
      '--terra-action-footer-border-top': 'thick double #0f0',
    });
  });
});
