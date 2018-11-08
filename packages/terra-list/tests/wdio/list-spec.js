describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    // Terra.should.themeCombinationOfCustomProperties({
    //   testName: 'themed',
    //   properties: {
    //     '--terra-list-item-background-color': '#dddddd',
    //   },
    // });
  });

  describe('ListItem Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item'));

    Terra.should.matchScreenshot('ListItem');
    Terra.should.beAccessible();

    it('Hover', () => browser.moveToObject('#selectable-item'));

    Terra.should.matchScreenshot('ListItem-Hover');
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
  });

  describe('ListSubsectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection-header'));

    Terra.should.matchScreenshot('ListSubsection');
    Terra.should.beAccessible();

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.should.matchScreenshot('ListSubsection-Hover');
  });
});
