Terra.describeViewports('ActionFooter', ['small', 'medium'], () => {
  describe('Multiple End Actions', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-end-action-footer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Multiple Start Actions', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-start-action-footer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Single End Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-end-action-footer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Single Start Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-action-footer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Single Start and End Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-start-end-action-footer'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
