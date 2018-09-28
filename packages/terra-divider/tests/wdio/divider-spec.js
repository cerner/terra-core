const viewports = Terra.viewports('medium');

describe('Divider', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/default-divider'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-divider-border-color': 'blue',
        '--terra-divider-border-top-width': '10px',
      },
    });
  });
});
