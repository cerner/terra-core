Terra.describeViewports('List', ['medium'], () => {
  it('should display default List', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/list/list');

    Terra.validates.element('list');
  });

  describe('ListItem', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-item'));

    it('should display default ListItem', () => {
      Terra.validates.element('item');
    });

    it('should Hover on ListItem', () => {
      $('#selectable-item').moveTo();

      Terra.validates.element('list item');
    });
  });

  describe('ListSection', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-section'));

    it('should display ListSection', () => {
      Terra.validates.element('section');
    });
  });

  describe('ListSubsection', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-subsection'));

    it('should display ListSubsection', () => {
      Terra.validates.element('subsection');
    });
  });

  describe('ListSectionHeader', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-section-header'));

    it('should display ListSectionHeader', () => {
      Terra.validates.element('section header');
    });
  });

  describe('ListSubsectionHeader', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-subsection-header'));

    it('should display ListSubsectionHeader', () => {
      Terra.validates.element('subsection header');
    });
  });
});
