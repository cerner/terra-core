/* global browser, Terra, before */
const shouldTheme = (customProperties) => {
  Object.entries(customProperties).forEach(([key, value]) => {
    it(`themed [${key}]`, () => {
      browser.setCSSCustomProps({ [key]: value });
      expect(browser.checkElement('[data-reactroot]')).to.matchReference();
    });
  });
};

const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
describe('StatusView', () => {
  describe('Displays a default status view', () => {
    before(() => browser.url('/#/tests/status-view-tests/default'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays an error status view with all props given', () => {
    before(() => browser.url('/#/tests/status-view-tests/error-all-props'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-family': 'Impact',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-buttons-flex-direction-small-width': 'column',
      '--terra-status-view-buttons-padding-top': '10px',
      '--terra-status-view-button-flex': 'auto',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays an error status view with the glyph being hidden', () => {
    before(() => browser.url('/#/tests/status-view-tests/glyph-hidden'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays an error status view with the glyph being hidden with too small of a height', () => {
    before(() => browser.url('/#/tests/status-view-tests/height-too-small'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-family': 'Impact',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-buttons-flex-direction-small-width': 'column',
      '--terra-status-view-buttons-padding-top': '10px',
      '--terra-status-view-button-flex': 'auto',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays a no-data status view with the content centered in its container', () => {
    before(() => browser.url('/#/tests/status-view-tests/centered'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays a no-matching-results status view with the content aligned at the top in its container', () => {
    before(() => browser.url('/#/tests/status-view-tests/align-top'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays a not-authorized status view', () => {
    before(() => browser.url('/#/tests/status-view-tests/not-authorized'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays a no-service status view', () => {
    before(() => browser.url('/#/tests/status-view-tests/no-service'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays a custom status view that displays as empty by default', () => {
    before(() => browser.url('/#/tests/status-view-tests/custom'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Displays an error status view that displays wrapping text', () => {
    before(() => browser.url('/#/tests/status-view-tests/text-wrapping'));

    shouldTheme({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-family': 'Impact',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-family': 'Impact',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-buttons-flex-direction-small-width': 'column',
      '--terra-status-view-buttons-padding-top': '10px',
      '--terra-status-view-button-flex': 'auto',
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
