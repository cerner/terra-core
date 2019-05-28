describe('Radio', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/default-radio'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.moveToObject('#default');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });

    describe('Checked', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.click('[for="default"]');
        browser.click('#site');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });

    describe('Focus', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.keys('Tab');
      });

      Terra.it.matchesScreenshot();
      Terra.it.isAccessible();
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/disabled-radio');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/hidden-radio'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });
});
