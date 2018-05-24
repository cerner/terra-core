/* global browser, Terra */
const viewports = Terra.viewports('tiny');

describe('Card', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/default-card'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-card-background-color': 'yellow',
        '--terra-card-border': '10px dashed purple',
        '--terra-card-border-radius': '50px',
        '--terra-card-box-shadow': 'inset 0 0 50px purple',
        '--terra-card-color': 'purple',
      },
    });
  });

  describe('Raised', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/raised-card'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-card-raised-box-shadow': 'inset 0 50px 0 red',
      },
    });
  });

  describe('Card Body Padding Horizontal', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/card-padding-horizontal'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Card Body Padding Vertical', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/card-padding-vertical'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Card Body Padded', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/card-padding'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-card-padding-bottom': '50px',
        '--terra-card-padding-top': '50px',
        '--terra-card-padding-left': '50px',
        '--terra-card-padding-right': '50px',
      },
    });
  });

  describe('Card Body Centered', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-card/card/card-content-center'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
