describe('Progress Bar', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Size', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-size'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
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

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Gradient', () => {
    before(() => browser.url('/#/raw/tests/terra-progress-bar/progress-bar/progress-bar-gradient'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
