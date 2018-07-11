/* global browser, Terra, before */

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
        '--terra-progress-bar-height-tiny': '25px',
        '--terra-progress-bar-height-small': '20px',
        '--terra-progress-bar-height-medium': '17px',
        '--terra-progress-bar-height-large': '14px',
        '--terra-progress-bar-height-huge': '10px',
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
