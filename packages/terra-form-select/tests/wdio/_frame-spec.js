const viewports = Terra.viewports('tiny');

describe('Frame', () => {
  describe('should have a themeable disabled icon', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/disabled'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-select-disabled-arrow-background': 'rgb(0, 0, 255)',
        '--terra-form-select-disabled-placeholder-color': 'red',
        '--terra-form-select-disabled-placeholder-font-style': 'italic',
      },
    });
  });
});
