const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('../common');

describe('Centered action footer theme', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-centered-action-footer'));

    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer'));

    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });
});
