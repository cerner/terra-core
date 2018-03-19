/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('ActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/empty-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple End Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/multiple-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple Start Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/multiple-start-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple Start and End Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/multiple-start-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });

  describe('Single End Action', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/single-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start Action', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/single-start-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start and End Action', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-footer/action-footer/single-start-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
