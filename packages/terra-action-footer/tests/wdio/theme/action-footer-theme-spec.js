const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('../common');

describe('Action footer theme', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/empty-action-footer'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: withoutActionsThemeables,
    });
  });

  describe('Multiple Start and End Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-end-action-footer'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: withActionsThemeables,
    });
  });
});
