describe('Checkbox', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/default-checkbox'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();

    describe('Hover', () => {
      before(() => {
        browser.moveToObject('#default');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();

      after(() => {
        browser.moveToObject('#root', 0, 0);
      });
    });

    describe('Focus', () => {
      before(() => {
        browser.keys('Tab');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });

    describe('Checked', () => {
      before(() => {
        browser.waitForVisible('#default');
        browser.click('[for="default"]');
        browser.click('#site');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
  });

  describe('Disabled', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/disabled-checkbox'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();

    describe('Disabled Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#disabled');
        browser.moveToObject('#disabled');
      });

      Terra.it.isAccessible();
      Terra.it.matchesScreenshot();
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/hidden-label-checkbox'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/populated-checkbox'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/long-text-checkbox'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Three Checkboxes, First Defaulted to Checked', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/multiple-checkboxes'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
