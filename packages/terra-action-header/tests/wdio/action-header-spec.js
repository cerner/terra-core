/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium', 'large');

viewports.forEach((viewport) => {
  describe('ActionHeader', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/default-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Back', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Back Close', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-close-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Close', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/close-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Minimize Custom Button', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/minimize-custom-button-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Maximize Close', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/maximize-close-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Back Close Previous Next', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-close-previous-next-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Next Enabled Previous Disabled', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/next-disabled-previous-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Previous Enabled Next Disabled', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/previous-disabled-next-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('Wrapped Title', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/wrapped-title-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('End Element Only', () => {
      before(() => browser.url('/#/raw/tests/terra-action-header/action-header/end-element-action-header'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});

describe('ActionHeader - Themeable', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
  });

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/default-action-header'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-action-header-background-color': '#551A8B',
        '--terra-action-header-border-bottom': '1px solid #00FF00',
        '--terra-action-header-border-left': '1px solid #00FF00',
        '--terra-action-header-border-right': '1px solid #00FF00',
        '--terra-action-header-border-top': '1px solid #00FF00',
        '--terra-action-header-box-shadow': '5px 5px 5px #551A8B',
        '--terra-action-header-font-size': '0.5rem',
        '--terra-action-header-padding': '1rem',
      },
    });
  });

  describe('Back', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-action-header'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-action-header-margin-right': '2rem',
        '--terra-action-header-icon-top': '0.2rem',
        '--terra-action-header-back-icon': '#551A8B',
      },
    });
  });

  describe('Back Close', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-close-action-header'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-action-header-margin-left': '2rem',
        '--terra-action-header-margin-right': '2rem',
        '--terra-action-header-close-icon': '#551A8B',
      },
    });
  });
});
