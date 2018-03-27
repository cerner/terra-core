/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ActionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/default-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });

  describe('Back', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/back-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });

  describe('Back Close', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/back-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });

  describe('Keep Closed', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/keep-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });

  describe('Custom Button', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/custom-button-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });

  describe('Wrapped Title', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/wrapped-title-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '0 1px 0 0 #FF8C00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    );
  });
});
