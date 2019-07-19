Terra.describeViewports('Radio', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/default-radio'));

    Terra.it.validatesElement();

    describe('Hover', () => {
      before(() => {
        browser.moveToObject('#default');
      });

      Terra.it.validatesElement();
    });

    describe('Checked', () => {
      before(() => {
        browser.click('[for="default"]');
        browser.click('#site');
      });

      Terra.it.validatesElement();
    });

    describe('Focus', () => {
      before(() => {
        browser.keys(['Tab']);
      });

      Terra.it.validatesElement();
    });
  });

  describe('Disabled', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/disabled-radio');
    });

    Terra.it.validatesElement();
  });

  describe('Hidden Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/hidden-radio'));

    Terra.it.validatesElement();
  });
});
