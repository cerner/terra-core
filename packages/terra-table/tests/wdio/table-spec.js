const viewports = Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('Table', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('Table Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/default-table'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('TableSection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-section'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('TableSubsection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-subsection'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('TableHeader Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-header'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-row-background-color': 'pink',
          '--terra-table-row-divider-border-top': '3px dashed green',
        },
      });
    });

    describe('TableRow Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-row'));

      Terra.should.matchScreenshot('TableRow');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#selectable-row'));

      Terra.should.matchScreenshot('TableRow-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-row-background-color': 'pink',
          '--terra-table-row-divider-border-top': '3px dashed green',
          '--terra-table-row-divider-border-bottom': '2px dotted yellow',
          '--terra-table-row-selected-background-color': 'blue',
          '--terra-table-row-selected-divider-border-color': 'orange',
          '--terra-table-row-selected-divider-border-top-color': 'purple',
          '--terra-table-row-hover-active-background-color': 'black',
          '--terra-table-row-focus-background-color': 'cyan',
          '--terra-table-row-focus-box-shadow': '0 0 3px #FF0000',
          '--terra-table-row-focus-outline': '5px solid red',
          '--terra-table-row-selected-hover-background-color': 'beige',
          '--terra-table-row-selected-focus-background-color': 'darkgrey',
          '--terra-table-row-selected-focus-false-background-color': 'navy',
        },
      });
    });

    describe('Non Striped Table', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table/no-striped-table'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-background-color': '#dddddd',
          '--terra-table-border': '#000 dashed 2px',
          '--terra-table-cell-border-left': '#0f0 solid 1px',
          '--terra-table-first-cell-border-left': '#dddddd solid 2px',
        },
      });
    });

    describe('No Padding Table', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table/no-padding-table'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-background-color': '#dddddd',
          '--terra-table-border': '#000 dashed 2px',
          '--terra-table-cell-border-left': '#0f0 solid 1px',
          '--terra-table-first-cell-border-left': '#dddddd solid 2px',
        },
      });
    });

    describe('TableSectionHeader Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-section-header'));

      Terra.should.matchScreenshot('TableSectionHeader');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSubsection-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-section-header-background-color': '#pink',
          '--terra-table-section-header-border-bottom': '2px dashed green',
          '--terra-table-section-header-padding-bottom': '20px',
          '--terra-table-section-header-padding-left': '30px',
          '--terra-table-section-header-padding-top': '10px',
          '--terra-table-section-header-title-color': 'yellow',
          '--terra-table-section-header-title-font-size': '20px',
          '--terra-table-section-header-title-line-height': '20px',
          '--terra-table-section-header-collapsible-padding-left': '5px',
          '--terra-table-section-header-focus-background-color': 'orange',
          '--terra-table-section-header-focus-box-shadow': '0 0 3px #FF0000',
          '--terra-table-section-header-focus-outline': '5px solid red',
          '--terra-table-section-header-hover-active-background-color': 'blue',
          '--terra-table-section-header-start-padding-right': '15px',
        },
      });
    });

    describe('TableSubsectionHeader Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-subsection-header'));

      Terra.should.matchScreenshot('TableSubsection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSubsection-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-subsection-header-background-color': 'pink',
          '--terra-table-subsection-header-border-bottom': '2px dashed green',
          '--terra-table-subsection-header-padding-bottom': '20px',
          '--terra-table-subsection-header-padding-left': '30px',
          '--terra-table-subsection-header-padding-top': '10px',
          '--terra-table-subsection-header-title-color': 'yellow',
          '--terra-table-subsection-header-title-font-size': '20px',
          '--terra-table-subsection-header-title-line-height': '20px',
          '--terra-table-subsection-header-collapsible-padding-left': '5px',
          '--terra-table-subsection-header-focus-background-color': 'orange',
          '--terra-table-subsection-header-focus-box-shadow': '0 0 3px #FF0000',
          '--terra-table-subsection-header-focus-outline': '5px solid red',
          '--terra-table-subsection-header-hover-active-background-color': 'blue',
          '--terra-table-subsection-header-start-padding-right': '15px',
        },
      });
    });
  });
});
