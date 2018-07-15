/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('ActionFooterContainer', () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-action-footer-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-action-footer-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });

  describe('Borderless', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/borderless-action-footer-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
