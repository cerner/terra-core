describe('Spacer', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/default-spacer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size small-2', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small-2'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size small-1', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small-1'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size small', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-small'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size medium', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-medium'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size large', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size large+1', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-1'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size large+2', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-2'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size large+3', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-3'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Spacer with size large+4', () => {
    before(() => browser.url('/#/raw/tests/terra-spacer/spacer/spacer-large-4'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
