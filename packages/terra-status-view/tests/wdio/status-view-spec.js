/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'medium');

describe('StatusView', () => {
  describe('Displays a default status view', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/default'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays an error status view with all props given', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/error-all-props'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-actions-flex-direction-small-width': 'column',
      '--terra-status-view-actions-padding-top': '10px',
      '--terra-status-view-actions-button-flex': 'auto',
      '--terra-status-view-actions-button-margin-left': '5px',
      '--terra-status-view-actions-button-margin-right': '5px',
      '--terra-status-view-actions-button-margin-top': '10px',
    });
  });

  describe('Displays an error status view with the glyph being hidden', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/glyph-hidden'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays an error status view with the glyph being hidden with too small of a height', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/height-too-small'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-actions-flex-direction-small-width': 'column',
      '--terra-status-view-actions-padding-top': '10px',
      '--terra-status-view-actions-button-flex': 'auto',
      '--terra-status-view-actions-button-margin-left': '5px',
      '--terra-status-view-actions-button-margin-right': '5px',
      '--terra-status-view-actions-button-margin-top': '10px',
    });
  });

  describe('Displays a no-data status view with the content centered in its container', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/centered'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays a no-matching-results status view with the content aligned at the top in its container', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/align-top'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays a not-authorized status view', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/not-authorized'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays a custom status view', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/custom'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
    });
  });

  describe('Displays an error status view that displays wrapping text', () => {
    beforeEach(() => browser.url('/#/tests/status-view-tests/text-wrapping'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-status-view-padding-bottom': '10px',
      '--terra-status-view-padding-top': '10px',
      '--terra-status-view-title-color': 'purple',
      '--terra-status-view-title-font-size': '36px',
      '--terra-status-view-message-color': 'purple',
      '--terra-status-view-message-font-size': '24px',
      '--terra-status-view-message-padding-top': '10px',
      '--terra-status-view-message-text-align': 'left',
      '--terra-status-view-divider-padding-top': '10px',
      '--terra-status-view-actions-flex-direction-small-width': 'column',
      '--terra-status-view-actions-padding-top': '10px',
      '--terra-status-view-actions-button-flex': 'auto',
      '--terra-status-view-actions-button-margin-left': '5px',
      '--terra-status-view-actions-button-margin-right': '5px',
      '--terra-status-view-actions-button-margin-top': '10px',
    });
  });
});
