const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('../common');

describe('Block action footer theme', () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-action-footer-container'));

    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-action-footer-container'));

    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });
});
