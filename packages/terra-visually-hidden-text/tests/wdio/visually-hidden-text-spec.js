Terra.describeViewports('VisuallyHiddenText', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-visually-hidden-text/visually-hidden-text/default-visually-hidden-text'));
    Terra.it.validatesElement();
  });

  describe('NonNull', () => {
    before(() => browser.url('/#/raw/tests/terra-visually-hidden-text/visually-hidden-text/non-null-visually-hidden-text'));
    Terra.it.validatesElement();
  });
});
