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
        '--terra-action-header-box-shadow': '5px 5px 5px #551A8B',
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
        '--terra-action-header-margin-right': '2rem',
        '--terra-action-header-icon-top': '0.2rem',
        '--terra-action-header-back-icon': '#551A8B',
      },
    );
  });

  describe('Back Close', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/back-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty(
      {
        '--terra-action-header-margin-left': '2rem',
        '--terra-action-header-margin-right': '2rem',
        '--terra-action-header-close-icon': '#551A8B',
      },
    );
  });

  describe('Close', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Minimize Custom Button', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/minimize-custom-button-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Maximize Close', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/maximize-close-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Back Close Previous Next', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/back-close-previous-next-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Wrapped Title', () => {
    beforeEach(() => browser.url('/#/raw/tests/action-header/wrapped-title-action-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
