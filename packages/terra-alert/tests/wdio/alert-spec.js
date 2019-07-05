Terra.describeViewports('Alert', ['tiny', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/default-alert'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Types', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-type'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-padding'));
    Terra.it.matchesScreenshot();
  });

  describe('Titles', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-title'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Custom', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/custom-alert'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Action Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-alert/alert/alert-action-button');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();

    it('should be register actions', () => {
      expect(browser.getText('#actionButtonClickCount')).to.equal('0');
      browser.click('#actionAlert button');
      expect(browser.getText('#actionButtonClickCount')).to.equal('1');
    });

    after(() => browser.moveToObject('#root', 0, 900));
  });

  describe('Dismissible', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-alert/alert/alert-dismissible');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();

    it('should dismiss', () => {
      browser.click('#dismissibleAlert button');
      expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');
    });

    after(() => browser.moveToObject('#root', 0, 900));
  });
});
