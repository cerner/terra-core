const viewports = Terra.viewports('tiny', 'medium');

describe('StatusView', () => {
  describe('Displays a default status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-default'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an error status view with all props given', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-error-all-props'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an error status view with the glyph being hidden', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-glyph-hidden'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an error status view with the glyph being hidden with too small of a height', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-height-too-small'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays a no-data status view with the content centered in its container', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-center'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays a no-matching-results status view with the content aligned at the top in its container', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-align-top'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays a not-authorized status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-not-authorized'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays a custom status view', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-custom'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an error status view that displays wrapping text', () => {
    before(() => browser.url('/#/raw/tests/terra-status-view/status-view/status-view-text-wrapping'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Displays an error status view that is too thin for a glyph', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-status-view/status-view/status-view-thin-constraint');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });
});
