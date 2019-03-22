const viewports = Terra.viewports('medium');

describe('Divider', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/default-divider'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-divider-before-background-color': '#ff0000',
      },
    });
  });

  describe('Custom Text', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/custom-divider'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-divider-before-background-color': '#0079BE',
        '--terra-divider-after-text-color': '#ff0000',
        '--terra-divider-after-text-margin-bottom': '0.5rem',
        '--terra-divider-after-text-margin-top': '0.5rem',
        '--terra-divider-after-text-padding-left': '1.0rem',
        '--terra-divider-after-text-padding-right': '1.0rem',
      },
    });
  });
});
