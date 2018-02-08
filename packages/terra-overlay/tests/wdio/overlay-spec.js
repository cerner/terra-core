/* global before, browser, Terra */

describe('Overlay', () => {
  describe('Light Themed', () => {
    before(() => browser.url('/#/tests/overlay-tests/light-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-overlay-content-color': 'red',
      '--terra-overlay-light-background-color': 'green',
      '--terra-overlay-light-image': 'linear-gradient(red, green)',
      '--terra-overlay-light-opacity': '0.8',
      '--terra-overlay-content-padding': '1000px',
    });
  });

  describe('Dark Themed', () => {
    before(() => browser.url('/#/tests/overlay-tests/dark-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-overlay-dark-background-color': 'blue',
      '--terra-overlay-dark-image': 'linear-gradient(blue, green)',
      '--terra-overlay-dark-opacity': '0.8',
      '--terra-overlay-dark-content-color': 'red',
    });
  });
});
