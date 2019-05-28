const viewports = Terra.viewports('tiny');

describe('Card', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/default-card'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
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
    before(() => browser.url('/#/raw/tests/terra-card/card/raised-card'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-card-raised-box-shadow': 'inset 0 50px 0 red',
      },
    });
  });

  describe('Card Body Padding Horizontal', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-horizontal'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Padding Vertical', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding-vertical'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Body Padded', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-padding'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
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
    before(() => browser.url('/#/raw/tests/terra-card/card/card-content-center'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Card Visually Hidden Text', () => {
    before(() => browser.url('/#/raw/tests/terra-card/card/card-visually-hidden-text'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
