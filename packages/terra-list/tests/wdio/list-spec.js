Terra.describeViewports('List', ['medium'], () => {
  describe('List Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list'));

    Terra.it.validatesElement();
  });

  describe('ListItem Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-item'));

    Terra.it.validatesElement('ListItem');

    it('Hover', () => browser.moveToObject('#selectable-item'));

    Terra.it.matchesScreenshot('ListItem-Hover');
  });

  describe('ListSection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section'));

    Terra.it.validatesElement();
  });

  describe('ListSubsection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection'));

    Terra.it.validatesElement();
  });

  describe('ListSectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-section-header'));

    Terra.it.validatesElement('ListSectionHeader');

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.matchesScreenshot('ListSubsection-Hover');
  });

  describe('ListSubsectionHeader Test', () => {
    before(() => browser.url('/#/raw/tests/terra-list/list/list-subsection-header'));

    Terra.it.validatesElement('ListSubsection');

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.matchesScreenshot('ListSubsection-Hover');
  });
});
