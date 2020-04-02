Terra.describeViewports('Switch', ['tiny', 'medium', 'large'], () => {
  describe('DefaultSwitch', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/default-switch'));

    Terra.it.validatesElement();

    describe('Focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });

    describe('Checked', () => {
      before(() => {
        browser.waitForVisible('#defaultSwitch');
        browser.click('[for="defaultSwitch"]');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/disabled-switch'));

    Terra.it.validatesElement();

    describe('Disabled Click', () => {
      before(() => {
        browser.moveToObject('#disabledSwitch');
        browser.click('[for="disabledSwitch"]');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Long Label Text', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/switch/label-wrap'));

    Terra.it.validatesElement();
  });
});
