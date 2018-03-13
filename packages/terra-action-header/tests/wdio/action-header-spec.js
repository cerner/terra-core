/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ActionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/default-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-height': '2.929rem',
        '--terra-action-header-padding': '0.714rem 0.714rem 0.714rem',
      },
    );
  });

  describe('Back', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/back-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-height': '2.929rem',
        '--terra-action-header-padding': '0.714rem 0.714rem 0.714rem',
      },
    );
  });

  describe('Back Close', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/back-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-height': '2.929rem',
        '--terra-action-header-padding': '0.714rem 0.714rem 0.714rem',
      },
    );
  });

  describe('Keep Closed', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/keep-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-height': '2.929rem',
        '--terra-action-header-padding': '0.714rem 0.714rem 0.714rem',
      },
    );
  });

  describe('Custom Button', () => {
    beforeEach(() => browser.url('/#/tests/action-header-tests/custom-button-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-font-color': '#4682B4',
        '--terra-action-header-font-family': 'Roboto',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-height': '2.929rem',
        '--terra-action-header-padding': '0.714rem 0.714rem 0.714rem',
      },
    );
  });
});
