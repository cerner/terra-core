/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('ActionFooterContainer', () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer-container/without-actions-action-footer-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer-container/with-actions-action-footer-container'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });
});
