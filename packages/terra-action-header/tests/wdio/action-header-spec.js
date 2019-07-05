Terra.describeViewports('ActionHeader', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/default-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Back', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Back Close', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-close-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Close', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/close-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Minimize Custom Button', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/minimize-custom-button-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Maximize Close', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/maximize-close-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Back Close Previous Next', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/back-close-previous-next-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Next Enabled Previous Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/next-enabled-previous-disabled-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Previous Enabled Next Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/previous-enabled-next-disabled-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Wrapped Title', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/wrapped-title-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('End Element Only', () => {
    before(() => browser.url('/#/raw/tests/terra-action-header/action-header/end-element-action-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
