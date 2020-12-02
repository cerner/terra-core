Terra.describeViewports('List', ['medium'], () => {
  it('should display default List', () => {
    browser.url('/raw/tests/terra-list/list/list');

    Terra.validates.element('default');
  });

  describe('ListItem', () => {
    before(() => browser.url('/raw/tests/terra-list/list/list-item'));

    it('should display default ListItem', () => {
      Terra.validates.element('default');
    });

    it('should Hover on ListItem', () => {
      browser.moveToObject('#selectable-item');

      Terra.validates.element('hover');
    });
  });

  describe('ListSection', () => {
    before(() => browser.url('/raw/tests/terra-list/list/list-section'));

    it('should display ListSection', () => {
      Terra.validates.element('default');
    });
  });

  describe('ListSubsection', () => {
    before(() => browser.url('/raw/tests/terra-list/list/list-subsection'));

    it('should display ListSubsection', () => {
      Terra.validates.element('default');
    });
  });

  describe('ListSectionHeader', () => {
    before(() => browser.url('/raw/tests/terra-list/list/list-section-header'));

    it('should display ListSectionHeader', () => {
      Terra.validates.element('default');
    });
  });

  describe('ListSubsectionHeader', () => {
    before(() => browser.url('/raw/tests/terra-list/list/list-subsection-header'));

    it('should display ListSubsectionHeader', () => {
      Terra.validates.element('ListSubsectionHeader');
    });
  });
});
