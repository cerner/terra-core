/* global browser, Terra, before */

const viewports = Terra.viewports('medium');

describe('Selectable Table Rows', () => {
  describe('Selectable Table Rows - Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-default'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Selectable Table Rows - Subheaders', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-and-subheaders'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Selectable Table Rows - Preselected', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-preselected'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Selectable Table Rows - Non Selectable', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-non-selectable'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Selectable Table Rows - onChange', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-on-change');
      browser.waitForVisible('table');
    });

    it('selects the first row', () => {
      browser.click('[class*="row"]:nth-child(1)');
    });

    Terra.should.matchScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.should.matchScreenshot('second-row', { viewports });

    it('selects the third row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.should.matchScreenshot('third-row', { viewports });
  });

  describe('Selectable Table Rows - One Row', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-one-row'));

    Terra.should.matchScreenshot({ viewports });
  });

  describe('Selectable Table Rows - No Rows', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-table/table/selectable-table/selectable-table-rows-no-rows'));

    Terra.should.matchScreenshot({ viewports });
  });
});
