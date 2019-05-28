const { viewports } = require('./common');

describe('CenteredActionFooter', () => {
  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Single Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-action-centered-action-footer'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
