Terra.describeViewports('Selectable Table Rows', ['medium'], () => {
  describe('Selectable Table Rows - Default', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-default'));

    Terra.it.validatesElement();
  });

  describe('Selectable Table Rows - Subheaders', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-and-subheaders'));

    Terra.it.validatesElement();
  });

  describe('Selectable Table Rows - Preselected', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-preselected'));

    Terra.it.validatesElement();
  });

  describe('Selectable Table Rows - Non Selectable', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-non-selectable'));

    Terra.it.matchesScreenshot();
  });

  describe('Selectable Table Rows - onChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-on-change');
      browser.waitForVisible('table');
    });

    it('selects the first row', () => {
      browser.click('[class*="row"]:nth-child(1)');
    });

    Terra.it.validatesElement('first-row');

    it('selects the second row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('second-row');

    it('selects the third row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('third-row');
  });

  describe('Selectable Table Rows - One Row', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-one-row'));

    Terra.it.matchesScreenshot();
  });

  describe('Selectable Table Rows - No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-no-rows'));

    Terra.it.matchesScreenshot();
  });
});
