Terra.describeViewports('Progress Bar', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-default'));

    Terra.it.validatesElement();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-size'));

    Terra.it.validatesElement();
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-color'));

    Terra.it.validatesElement();
  });

  describe('Customized', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-customized-colors'));

    Terra.it.validatesElement();
  });
});
