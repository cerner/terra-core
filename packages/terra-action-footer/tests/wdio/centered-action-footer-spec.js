/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('CenteredActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/centered-action-footer/empty-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/centered-action-footer/multiple-action-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });

  describe('Single Action', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/centered-action-footer/single-action-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
