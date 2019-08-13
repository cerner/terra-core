const viewports = Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('TableCellGrid', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('TableCellGrid Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/table-cell-grid'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-background-color': 'red',
          '--terra-flex-table-border': '2px solid green',
          '--terra-flex-table-body-background-color': 'yellow',
        },
      });
    });

    describe('Padded Table', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/padding-table'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-cell-standard-padding-bottom': '1rem',
          '--terra-flex-table-cell-standard-padding-left': '1rem',
          '--terra-flex-table-cell-standard-padding-right': '1rem',
          '--terra-flex-table-cell-standard-padding-top': '1rem',
          '--terra-flex-table-cell-compact-padding-bottom': '1rem',
          '--terra-flex-table-cell-compact-padding-left': '1rem',
          '--terra-flex-table-cell-compact-padding-right': '1rem',
          '--terra-flex-table-cell-compact-padding-top': '1rem',
          '--terra-flex-table-header-cell-standard-padding-bottom': '1rem',
          '--terra-flex-table-header-cell-standard-padding-left': '1rem',
          '--terra-flex-table-header-cell-standard-padding-right': '1rem',
          '--terra-flex-table-header-cell-standard-padding-top': '1rem',
          '--terra-flex-table-header-cell-compact-padding-bottom': '1rem',
          '--terra-flex-table-header-cell-compact-padding-left': '1rem',
          '--terra-flex-table-header-cell-compact-padding-right': '1rem',
          '--terra-flex-table-header-cell-compact-padding-top': '1rem',
        },
      });
    });

    describe('TableHeader Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/table-header'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-header-background-color': 'pink',
          '--terra-flex-table-header-border-bottom': '5px dashed green',
          '--terra-flex-table-header-border-top': '5px dashed green',
          '--terra-flex-table-header-cell-tiny-min-width': '0.5rem',
          '--terra-flex-table-header-cell-small-min-width': '1.25rem',
          '--terra-flex-table-header-cell-medium-min-width': '1.75rem',
          '--terra-flex-table-header-cell-large-min-width': '2.5rem',
          '--terra-flex-table-header-cell-huge-min-width': '3.0rem',
          '--terra-flex-table-sort-indicator-color': 'yellow',
          '--terra-flex-table-sort-indicator-width': '1rem',
          '--terra-flex-table-header-cell-color': 'orange',
          '--terra-flex-table-header-cell-font-size': '0.5rem',
          '--terra-flex-table-header-cell-font-weight': 'normal',
          '--terra-flex-table-first-header-cell-border-left': '3px dashed blue',
          '--terra-flex-table-last-header-cell-border-right': '4px dashed blue',
          '--terra-flex-table-header-cell-selectable-padding-top': '28px',
        },
      });
    });

    describe('CellGrid Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/cell-grid'));

      Terra.should.matchScreenshot('TableRow');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#selectable-row'));

      Terra.should.matchScreenshot('TableRow-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-row-border-top': '3px solid orange',
          '--terra-flex-table-last-row-border-bottom': '3px solid green',
          '--terra-flex-table-row-striped-background-color': 'pink',
          '--terra-flex-table-row-striped-selected-background-color': 'blue',
          '--terra-flex-table-row-striped-hover-focus-background-color': 'yellow',
          '--terra-flex-table-row-striped-selected-hover-focus-background-color': 'red',
          '--terra-flex-table-row-selected-background-color': 'crimson',
          '--terra-flex-table-row-selected-border-color': 'aliceblue',
          '--terra-flex-table-row-selected-border-top-color': 'cornsilk',
          '--terra-flex-table-row-focus-outline': 'thick ridge pink',
          '--terra-flex-table-row-hover-focus-background-color': 'coral',
          '--terra-flex-table-row-focus-background-color': 'coral',
          '--terra-flex-table-row-focus-border-bottom': '1px solid brown',
          '--terra-flex-table-row-focus-border-color': 'burlywood',
          '--terra-flex-table-row-focus-box-shadow': 'inset 2 0 0 1px blue, inset 2 0 0 3px green',
          '--terra-flex-table-row-selected-focus-background-color': 'cyan',
          '--terra-flex-table-row-selected-hover-focus-background-color': 'beige',
          '--terra-flex-table-first-cell-border-left': '5px dashed aqua',
          '--terra-flex-table-last-cell-border-right': '5px dashed aqua',
        },
      });
    });

    describe('TableSection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/section'));

      Terra.should.matchScreenshot('TableSection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSection-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-section-header-background-color': '#pink',
          '--terra-flex-table-section-header-border-bottom': '2px dashed green',
          '--terra-flex-table-section-header-padding-bottom': '20px',
          '--terra-flex-table-section-header-padding-left': '30px',
          '--terra-flex-table-section-header-padding-top': '10px',
          '--terra-flex-table-section-header-title-color': 'yellow',
          '--terra-flex-table-section-header-title-font-size': '20px',
          '--terra-flex-table-section-header-title-line-height': '20px',
          '--terra-flex-table-section-header-collapsible-padding-left': '5px',
          '--terra-flex-table-section-header-focus-background-color': 'orange',
          '--terra-flex-table-section-header-focus-box-shadow': '0 0 3px #FF0000',
          '--terra-flex-table-section-header-focus-outline': '5px solid red',
          '--terra-flex-table-section-header-hover-active-background-color': 'blue',
          '--terra-flex-table-section-header-start-padding-right': '15px',
        },
      });
    });

    describe('TableSubsection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/subsection'));

      Terra.should.matchScreenshot('TableSubsection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSubsection-Hover');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-flex-table-subsection-header-background-color': 'pink',
          '--terra-flex-table-subsection-header-border-bottom': '2px dashed green',
          '--terra-flex-table-subsection-header-padding-bottom': '20px',
          '--terra-flex-table-subsection-header-padding-left': '30px',
          '--terra-flex-table-subsection-header-padding-top': '10px',
          '--terra-flex-table-subsection-header-title-color': 'yellow',
          '--terra-flex-table-subsection-header-title-font-size': '20px',
          '--terra-flex-table-subsection-header-title-line-height': '20px',
          '--terra-flex-table-subsection-header-collapsible-padding-left': '5px',
          '--terra-flex-table-subsection-header-focus-background-color': 'orange',
          '--terra-flex-table-subsection-header-focus-box-shadow': '0 0 3px #FF0000',
          '--terra-flex-table-subsection-header-focus-outline': '5px solid red',
          '--terra-flex-table-subsection-header-hover-active-background-color': 'blue',
          '--terra-flex-table-subsection-header-start-padding-right': '15px',
        },
      });
    });
  });
});
