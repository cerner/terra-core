/* global browser, Terra */
const {
  viewports,
  withActionsThemeables,
  withoutActionsThemeables,
} = require('./common');

describe('ActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/empty'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withoutActionsThemeables);
  });

  describe('Multiple End Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-end-actions'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple Start Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-start-actions'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple Start and End Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-start-end-actions'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(withActionsThemeables);
  });

  describe('Single End Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-end-action'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-start-action'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start and End Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-start-end-action'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
