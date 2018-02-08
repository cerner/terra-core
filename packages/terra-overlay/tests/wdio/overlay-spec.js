/* global before, browser, Terra */

describe('Overlay', () => {
  describe('Light Themed', () => {
    before(() => browser.url('/#/tests/overlay-tests/light-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-overlay-content-color': 'red',
      '--terra-overlay-content-padding': '1000px',
      '--terra-overlay-light-background-color': 'green',
      '--terra-overlay-light-background-image': 'linear-gradient(red, green)',
      '--terra-overlay-light-opacity': '0.8',
    });
  });

  describe('Dark Themed', () => {
    before(() => browser.url('/#/tests/overlay-tests/dark-themed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeEachCustomProperty({
      '--terra-overlay-content-padding': '1000px',
      '--terra-overlay-dark-background-color': 'blue',
      '--terra-overlay-dark-background-image': 'linear-gradient(blue, green)',
      '--terra-overlay-dark-content-color': 'red',
      '--terra-overlay-dark-opacity': '0.8',
    });
  });
});
