const { viewports } = require('./common');

describe('ActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple End Actions', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Multiple Start Actions', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single End Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Single Start and End Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-end-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
