/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('CenteredActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });

  describe('Multiple Block Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-block-action-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Action', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-action-centered-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
