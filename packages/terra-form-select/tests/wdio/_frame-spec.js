const viewports = Terra.viewports('tiny');

describe('Frame', () => {
  describe('should have a themeable disabled icon', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/disabled'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
