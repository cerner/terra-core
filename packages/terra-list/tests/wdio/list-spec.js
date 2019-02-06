describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-standard-item-fill-padding-bottom': '2rem',
        '--terra-list-standard-item-fill-padding-left': '2rem',
        '--terra-list-standard-item-fill-padding-right': '2rem',
        '--terra-list-standard-item-fill-padding-top': '2rem',
        '--terra-list-thin-item-fill-padding-bottom': '1rem',
        '--terra-list-thin-item-fill-padding-left': '2rem',
        '--terra-list-thin-item-fill-padding-right': '2rem',
        '--terra-list-thin-item-fill-padding-top': '1rem',
      },
    });
  });

  describe('ListItem Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item'));

    Terra.should.matchScreenshot('ListItem');
    Terra.should.beAccessible();

    it('Hover', () => browser.moveToObject('#selectable-item'));

    Terra.should.matchScreenshot('ListItem-Hover');
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-item-background-color': 'pink',
        '--terra-list-item-divider-border-top': '3px dashed green',
        '--terra-list-item-divider-border-bottom': '2px dotted yellow',
        '--terra-list-item-chevron-color': 'red',
        '--terra-list-item-min-height': '100px',
        '--terra-list-item-chevron-padding-right': '1rem',
        '--terra-list-item-chevron-height': '2rem',
        '--terra-list-item-chevron-width': '2rem',
        '--terra-list-item-selected-background-color': 'blue',
        '--terra-list-item-selected-divider-border-color': 'orange',
        '--terra-list-item-selected-divider-border-top-color': 'purple',
        '--terra-list-item-hover-active-background-color': 'black',
        '--terra-list-item-focus-background-color': 'cyan',
        '--terra-list-item-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-item-focus-outline': '5px solid red',
        '--terra-list-item-selected-hover-background-color': 'beige',
        '--terra-list-item-selected-focus-background-color': 'darkgrey',
        '--terra-list-item-selected-focus-false-background-color': 'navy',
      },
    });
  });

  describe('ListSection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('ListSubsection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('ListSectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section-header'));

    Terra.should.matchScreenshot('ListSectionHeader');
    Terra.should.beAccessible();

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.should.matchScreenshot('ListSubsection-Hover');
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-section-header-background-color': '#pink',
        '--terra-list-section-header-border-bottom': '2px dashed green',
        '--terra-list-section-header-padding-bottom': '20px',
        '--terra-list-section-header-padding-left': '30px',
        '--terra-list-section-header-padding-top': '10px',
        '--terra-list-section-header-title-color': 'yellow',
        '--terra-list-section-header-title-font-size': '20px',
        '--terra-list-section-header-title-line-height': '20px',
        '--terra-list-section-header-collapsible-padding-left': '5px',
        '--terra-list-section-header-focus-background-color': 'orange',
        '--terra-list-section-header-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-section-header-focus-outline': '5px solid red',
        '--terra-list-section-header-hover-active-background-color': 'blue',
        '--terra-list-section-header-start-padding-right': '15px',
      },
    });
  });

  describe('ListSubsectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection-header'));

    Terra.should.matchScreenshot('ListSubsection');
    Terra.should.beAccessible();

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.should.matchScreenshot('ListSubsection-Hover');
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-list-subsection-header-background-color': 'pink',
        '--terra-list-subsection-header-border-bottom': '2px dashed green',
        '--terra-list-subsection-header-padding-bottom': '20px',
        '--terra-list-subsection-header-padding-left': '30px',
        '--terra-list-subsection-header-padding-top': '10px',
        '--terra-list-subsection-header-title-color': 'yellow',
        '--terra-list-subsection-header-title-font-size': '20px',
        '--terra-list-subsection-header-title-line-height': '20px',
        '--terra-list-subsection-header-collapsible-padding-left': '5px',
        '--terra-list-subsection-header-focus-background-color': 'orange',
        '--terra-list-subsection-header-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-subsection-header-focus-outline': '5px solid red',
        '--terra-list-subsection-header-hover-active-background-color': 'blue',
        '--terra-list-subsection-header-start-padding-right': '15px',
      },
    });
  });
});
