const viewports = Terra.viewports('medium');

describe('Table', () => {
  describe('Non Striped Table', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/no-striped-table'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-table-background-color': '#dddddd',
        '--terra-table-border': '#000 dashed 2px',
        '--terra-table-cell-border': '#0f0 solid 1px',
        '--terra-table-row-border-vertical': '#dddddd solid 2px',
        '--terra-table-thead-background-color': '#f2f2f2',
        '--terra-table-thead-tr-border-bottom': '#00ff00 solid 1px',
        '--terra-table-thead-tr-border-top': '3px solid #000000',
        '--terra-table-thead-th-color': '#0000ff',
        '--terra-table-thead-th-font-size': '2rem',
        '--terra-table-thead-th-font-weight': 'normal',
        '--terra-table-row-border-horizontal': '#00ff00 solid 1px',
        '--terra-table-tfoot-tr-border-bottom': '#00f0f0 solid 1px',
        '--terra-table-tfoot-tr-border-top': '#00f0f0 solid 1px',
        '--terra-table-subheader-background-color': '#abc123',
        '--terra-table-subheader-color': '#dfeac2',
        '--terra-table-subheader-font-size': '0.5rem',
        '--terra-table-subheader-font-weight': '200',
        '--terra-table-sort-indicator-color': '#111111',
        '--terra-table-cell-min-width-tiny': '1rem',
        '--terra-table-cell-min-width-small': '5.25rem',
        '--terra-table-cell-min-width-medium': '2.75rem',
        '--terra-table-cell-min-width-large': '1.5rem',
        '--terra-table-cell-min-width-huge': '7.5rem',
        '--terra-table-cell-padding-bottom': '1.5em',
        '--terra-table-cell-padding-left': '2em',
        '--terra-table-cell-padding-right': '3em',
        '--terra-table-cell-padding-top': '1.5em',
      },
    });
  });

  describe('Striped', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/striped-table'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-table-row-striped-background-color': '#4f4f4f',
        '--terra-table-row-striped-selected-background-color': '#7facbe',
        '--terra-table-row-striped-hover-background-color': '#2fcef2',
        '--terra-table-row-striped-selected-hover-background-color': '#df3b3d',
        '--terra-table-row-selected-background-color': '#2fcef2',
        '--terra-table-row-selected-border-color': '#00cc99',
        '--terra-table-row-hover-background-color': '#555555',
        '--terra-table-row-selected-hover-background-color': '#888888',
      },
    });
  });

  describe('Non Padded Table', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/no-padding-table'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Sort Indicator', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-sort-indicator'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Highlighted Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-highlighted-rows'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Subheaders', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-subheaders'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Single Row', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/single-row-table'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-no-rows'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
