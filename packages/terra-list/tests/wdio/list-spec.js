describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
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
        '--terra-list-v3-item-background-color': 'pink',
        '--terra-list-v3-item-divider-border-top': '3px dashed green',
        '--terra-list-v3-item-divider-border-bottom': '2px dotted yellow',
        '--terra-list-v3-item-chevron-color': 'red',
        '--terra-list-v3-item-selected-background-color': 'blue',
        '--terra-list-v3-item-selected-divider-border-color': 'orange',
        '--terra-list-v3-item-selected-divider-border-top-color': 'purple',
        '--terra-list-v3-item-hover-background-color': 'black',
        '--terra-list-v3-item-focus-background-color': 'cyan',
        '--terra-list-v3-item-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-v3-item-focus-outline': '5px solid red',
        '--terra-list-v3-item-selected-hover-background-color': 'beige',
        '--terra-list-v3-item-selected-focus-background-color': 'darkgrey',
        '--terra-list-v3-item-selected-focus-false-background-color': 'navy',
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
        '--terra-list-v3-section-header-background-color': '#pink',
        '--terra-list-v3-section-header-border-bottom': '2px dashed green',
        '--terra-list-v3-section-header-padding-bottom': '20px',
        '--terra-list-v3-section-header-padding-left': '30px',
        '--terra-list-v3-section-header-padding-top': '10px',
        '--terra-list-v3-section-header-title-color': 'yellow',
        '--terra-list-v3-section-header-title-font-size': '20px',
        '--terra-list-v3-section-header-title-line-height': '20px',
        '--terra-list-v3-section-header-collapsible-padding-left': '5px',
        '--terra-list-v3-section-header-focus-background-color': 'orange',
        '--terra-list-v3-section-header-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-v3-section-header-focus-outline': '5px solid red',
        '--terra-list-v3-section-header-hover-background-color': 'blue',
        '--terra-list-v3-section-header-start-padding-right': '15px',
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
        '--terra-list-v3-subsection-header-background-color': 'pink',
        '--terra-list-v3-subsection-header-border-bottom': '2px dashed green',
        '--terra-list-v3-subsection-header-padding-bottom': '20px',
        '--terra-list-v3-subsection-header-padding-left': '30px',
        '--terra-list-v3-subsection-header-padding-top': '10px',
        '--terra-list-v3-subsection-header-title-color': 'yellow',
        '--terra-list-v3-subsection-header-title-font-size': '20px',
        '--terra-list-v3-subsection-header-title-line-height': '20px',
        '--terra-list-v3-subsection-header-collapsible-padding-left': '5px',
        '--terra-list-v3-subsection-header-focus-background-color': 'orange',
        '--terra-list-v3-subsection-header-focus-box-shadow': '0 0 3px #FF0000',
        '--terra-list-v3-subsection-header-focus-outline': '5px solid red',
        '--terra-list-v3-subsection-header-hover-background-color': 'blue',
        '--terra-list-v3-subsection-header-start-padding-right': '15px',
      },
    });
  });
});
