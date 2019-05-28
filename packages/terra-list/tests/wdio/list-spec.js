describe('List', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('List Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('ListItem Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item'));

    Terra.it.matchesScreenshot('ListItem');
    Terra.it.isAccessible();

    it('Hover', () => browser.moveToObject('#selectable-item'));

    Terra.it.matchesScreenshot('ListItem-Hover');
  });

  describe('ListSection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('ListSubsection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('ListSectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section-header'));

    Terra.it.matchesScreenshot('ListSectionHeader');
    Terra.it.isAccessible();

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.matchesScreenshot('ListSubsection-Hover');
  });

  describe('ListSubsectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection-header'));

    Terra.it.matchesScreenshot('ListSubsection');
    Terra.it.isAccessible();

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.matchesScreenshot('ListSubsection-Hover');
  });
});
