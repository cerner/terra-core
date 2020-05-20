Terra.describeViewports('Native Select Field', ['tiny'], () => {
  describe('Default Field', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/default-field'));

    Terra.it.validatesElement();
  });

  describe('Incomplete Field', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/incomplete-field'));

    Terra.it.validatesElement();
  });

  describe('Required Field', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/required-field'));

    Terra.it.validatesElement();
  });
});
