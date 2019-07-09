Terra.describeViewports('Alert', ['tiny', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/default-alert'));
    Terra.it.validatesElement();
  });

  describe('Types', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-type'));
    Terra.it.validatesElement();
  });

  describe('Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-padding'));
    Terra.it.validatesElement();
  });

  describe('Titles', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/alert-title'));
    Terra.it.validatesElement();
  });

  describe('Custom', () => {
    before(() => browser.url('/#/raw/tests/terra-alert/alert/custom-alert'));
    Terra.it.validatesElement();
  });

  describe('Action Button', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-alert/alert/alert-action-button');
    });

    Terra.it.validatesElement();

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

    Terra.it.validatesElement();

    it('should dismiss', () => {
      browser.click('#dismissibleAlert button');
      expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');
    });

    after(() => browser.moveToObject('#root', 0, 900));
  });
});
