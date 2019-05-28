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
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-progress-bar-tiny-height': '25px',
        '--terra-progress-bar-small-height': '20px',
        '--terra-progress-bar-medium-height': '17px',
        '--terra-progress-bar-large-height': '14px',
        '--terra-progress-bar-huge-height': '10px',
      },
    });
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
