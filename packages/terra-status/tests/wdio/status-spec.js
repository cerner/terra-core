Terra.describeViewports('Status', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-default'));

    Terra.it.validatesElement();
  });

  describe('Arrange', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-arrange'));

    Terra.it.validatesElement();
  });

  describe('Icon', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-icon'));

    Terra.it.validatesElement();
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-image'));

    Terra.it.validatesElement();
  });

  describe('No color', () => {
    before(() => browser.url('/#/raw/tests/terra-status/status/status-no-color'));

    Terra.it.validatesElement();
  });
});
