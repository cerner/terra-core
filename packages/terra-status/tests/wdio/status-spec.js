describe('Status', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-default'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Arrange', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-arrange'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-icon'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-image'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('No color', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-no-color'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
