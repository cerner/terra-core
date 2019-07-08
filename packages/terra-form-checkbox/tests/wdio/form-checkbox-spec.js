Terra.describeViewports('Checkbox', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/default-checkbox'));

    Terra.it.validatesElement();

    describe('Hover', () => {
      before(() => {
        browser.moveToObject('#default');
      });

      Terra.it.validatesElement();

      after(() => {
        browser.moveToObject('#root', 0, 0);
      });
    });

    describe('Focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });

    describe('Checked', () => {
      before(() => {
        browser.waitForVisible('#default');
        browser.click('[for="default"]');
        browser.click('#site');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/disabled-checkbox'));

    Terra.it.validatesElement();

    describe('Disabled Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#disabled');
        browser.moveToObject('#disabled');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/hidden-label-checkbox'));

    Terra.it.validatesElement();
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/populated-checkbox'));

    Terra.it.validatesElement();
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/long-text-checkbox'));

    Terra.it.validatesElement();
  });

  describe('Three Checkboxes, First Defaulted to Checked', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/multiple-checkboxes'));

    Terra.it.validatesElement();
  });
});
