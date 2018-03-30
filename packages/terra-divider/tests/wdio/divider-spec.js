/* global browser, Terra */
const viewports = Terra.viewports('medium');

describe('Divider', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/divider/default-divider'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });

    Terra.should.themeEachCustomProperty({
      '--terra-divider-border-color': 'blue',
      '--terra-divider-border-top-width': '10px',
    });
  });
});
