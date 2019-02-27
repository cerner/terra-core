const viewports = Terra.viewports('tiny', 'medium');

describe('StatusView', () => {
  describe('Displays a default status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-default'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays an error status view with all props given', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-error-all-props'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
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
      },
    });
  });

  describe('Displays an error status view with the glyph being hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-glyph-hidden'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays an error status view with the glyph being hidden with too small of a height', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-height-too-small'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
        '--terra-status-view-message-color': 'purple',
        '--terra-status-view-message-font-size': '24px',
        '--terra-status-view-message-padding-top': '10px',
        '--terra-status-view-message-text-align': 'left',
        '--terra-status-view-divider-padding-top': '10px',
        '--terra-status-view-actions-small-width-flex-direction': 'column',
        '--terra-status-view-actions-padding-top': '10px',
        '--terra-status-view-actions-button-flex': 'auto',
        '--terra-status-view-actions-button-margin-left': '5px',
        '--terra-status-view-actions-button-margin-right': '5px',
        '--terra-status-view-actions-button-margin-top': '10px',
      },
    });
  });

  describe('Displays a no-data status view with the content centered in its container', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-center'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays a no-matching-results status view with the content aligned at the top in its container', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-align-top'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays a not-authorized status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-not-authorized'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays a custom status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-custom'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '36px',
      },
    });
  });

  describe('Displays an error status view that displays wrapping text', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-text-wrapping'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-status-view-padding-bottom': '10px',
        '--terra-status-view-padding-top': '10px',
        '--terra-status-view-title-color': 'purple',
        '--terra-status-view-title-font-size': '30px',
        '--terra-status-view-message-color': 'purple',
        '--terra-status-view-message-font-size': '20px',
        '--terra-status-view-message-padding-top': '10px',
        '--terra-status-view-message-text-align': 'left',
        '--terra-status-view-divider-padding-top': '10px',
        '--terra-status-view-actions-flex-direction-small-width': 'column',
        '--terra-status-view-actions-padding-top': '10px',
        '--terra-status-view-actions-button-flex': 'auto',
        '--terra-status-view-actions-button-margin-left': '5px',
        '--terra-status-view-actions-button-margin-right': '5px',
        '--terra-status-view-actions-button-margin-top': '10px',
      },
    });
  });

  describe('Displays an error status view that is too thin for a glyph', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-status-view/status-view/status-view-thin-constraint');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
