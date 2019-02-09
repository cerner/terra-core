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
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-background-color': 'red',
          '--terra-table-border': '2px solid green',
          '--terra-table-body-background-color': 'yellow',
        },
      });
    });

    describe('Padded Table', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/padding-table'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-cell-standard-padding-bottom': '1rem',
          '--terra-table-cell-standard-padding-left': '1rem',
          '--terra-table-cell-standard-padding-right': '1rem',
          '--terra-table-cell-standard-padding-top': '1rem',
          '--terra-table-cell-compact-padding-bottom': '1rem',
          '--terra-table-cell-compact-padding-left': '1rem',
          '--terra-table-cell-compact-padding-right': '1rem',
          '--terra-table-cell-compact-padding-top': '1rem',
          '--terra-table-header-cell-standard-padding-bottom': '1rem',
          '--terra-table-header-cell-standard-padding-left': '1rem',
          '--terra-table-header-cell-standard-padding-right': '1rem',
          '--terra-table-header-cell-standard-padding-top': '1rem',
          '--terra-table-header-cell-compact-padding-bottom': '1rem',
          '--terra-table-header-cell-compact-padding-left': '1rem',
          '--terra-table-header-cell-compact-padding-right': '1rem',
          '--terra-table-header-cell-compact-padding-top': '1rem',
        },
      });
    });

    describe('TableHeader Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-header'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-table-header-background-color': 'pink',
          '--terra-table-header-border-bottom': '5px dashed green',
          '--terra-table-header-border-top': '5px dashed green',
          '--terra-table-header-cell-tiny-min-width': '0.5rem',
          '--terra-table-header-cell-small-min-width': '1.25rem',
          '--terra-table-header-cell-medium-min-width': '1.75rem',
          '--terra-table-header-cell-large-min-width': '2.5rem',
          '--terra-table-header-cell-huge-min-width': '3.0rem',
          '--terra-table-sort-indicator-color': 'yellow',
          '--terra-table-sort-indicator-width': '1rem',
          '--terra-table-header-cell-color': 'orange',
          '--terra-table-header-cell-font-size': '0.5rem',
          '--terra-table-header-cell-font-weight': 'normal',
          '--terra-table-first-header-cell-border-left': '3px dashed blue',
          '--terra-table-last-header-cell-border-right': '4px dashed blue',
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
          '--terra-table-row-border-top': '3px solid orange',
          '--terra-table-last-row-border-bottom': '3px solid green',
          '--terra-table-row-striped-background-color': 'pink',
          '--terra-table-row-striped-selected-background-color': 'blue',
          '--terra-table-row-striped-hover-focus-background-color': 'yellow',
          '--terra-table-row-striped-selected-hover-focus-background-color': 'red',
          '--terra-table-row-selected-background-color': 'crimson',
          '--terra-table-row-selected-border-color': 'aliceblue',
          '--terra-table-row-selected-border-top-color': 'cornsilk',
          '--terra-table-row-focus-outline': 'thick ridge pink',
          '--terra-table-row-hover-focus-background-color': 'coral',
          '--terra-table-row-focus-background-color': 'coral',
          '--terra-table-row-focus-border-bottom': '1px solid brown',
          '--terra-table-row-focus-border-color': 'burlywood',
          '--terra-table-row-focus-box-shadow': 'inset 2 0 0 1px blue, inset 2 0 0 3px green',
          '--terra-table-row-selected-focus-background-color': 'cyan',
          '--terra-table-row-selected-hover-focus-background-color': 'beige',
          '--terra-table-first-cell-border-left': '5px dashed aqua',
          '--terra-table-last-cell-border-right': '5px dashed aqua',
        },
      });
    });

    describe('TableSection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-section'));

      Terra.should.matchScreenshot('TableSection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSection-Hover');
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

    describe('TableSubsection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table/table/table-subsection'));

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
