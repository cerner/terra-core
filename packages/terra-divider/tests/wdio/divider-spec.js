const viewports = Terra.viewports('medium');

describe('Divider', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/default-divider'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Custom Text', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/divider-with-text'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
