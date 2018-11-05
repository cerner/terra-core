const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('../common');

describe('ActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple Start and End Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });
});
