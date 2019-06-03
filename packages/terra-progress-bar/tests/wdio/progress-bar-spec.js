describe('Progress Bar', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-default'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-size'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Color', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-color'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Customized', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-customized-colors'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
