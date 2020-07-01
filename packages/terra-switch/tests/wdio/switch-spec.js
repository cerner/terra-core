Terra.describeViewports('Switch', ['tiny'], () => {
  describe('DefaultSwitch', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/default-switch'));

    Terra.it.validatesElement();

    describe('should focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });

    describe('should check on click', () => {
      before(() => {
        browser.click('#defaultSwitch');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/disabled-switch'));

    Terra.it.validatesElement();

    describe('should not change on click', () => {
      before(() => {
        browser.moveToObject('#disabledSwitch');
        browser.click('#disabledSwitch');
      });

      Terra.it.validatesElement();
    });
  });
});

Terra.describeViewports('Switch', ['tiny', 'medium', 'large'], () => {
  describe('Long Label Text', () => {
    it('renders switch with long label text', () => {
      browser.url('/#/raw/tests/terra-switch/switch/label-wrap');
      Terra.validates.element();
    });
  });
});
