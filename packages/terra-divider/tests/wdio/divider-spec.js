const viewports = Terra.viewports('medium');

describe('Divider', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/default-divider'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-divider-border-color': '#ff0000',
        '--terra-divider-border-top-width': '10px',
      },
    });
  });

  describe('Custom Text', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/divider-with-text'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-divider-border-color': '#0079BE',
        '--terra-divider-border-top-width': '3px',
        '--terra-divider-text-color': '#007901',
        '--terra-divider-text-font-size': '1rem',
        '--terra-divider-text-font-style': 'italic',
        '--terra-divider-text-font-weight': 'normal',
        '--terra-divider-text-line-height': '1.5',
        '--terra-divider-text-padding-left': '1rem',
        '--terra-divider-text-padding-right': '1rem',
      },
    });
  });
});
