const {
  withActionsThemeables,
  withoutActionsThemeables,
} = require('../common');

describe('Block action footer theme', () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-block-action-footer'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: withoutActionsThemeables,
    });
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-block-action-footer'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: withActionsThemeables,
    });
  });
});
