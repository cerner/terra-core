Terra.describeViewports('Radio', ['medium'], () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/default-radio'));

    Terra.it.validatesElement();

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.moveToObject('#default');
      });

      Terra.it.validatesElement();
    });

    describe('Checked', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.click('[for="default"]');
        browser.click('#site');
      });

      Terra.it.validatesElement();
    });

    describe('Focus', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.keys('Tab');
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/disabled-radio');
    });

    Terra.it.validatesElement();
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/hidden-radio'));

    Terra.it.validatesElement();
  });
});
