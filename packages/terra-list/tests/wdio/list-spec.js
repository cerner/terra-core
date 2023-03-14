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

  describe('ListSectionDivider', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-section-divider'));

    it('should display ListSection with divider', () => {
      Terra.validates.element('section divider');
    });
  });

  describe('ListSubsection', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-subsection'));

    it('should display ListSubsection', () => {
      Terra.validates.element('subsection');
    });
  });

  describe('ListSubsectionDivider', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/list/list-subsection-divider'));

    it('should display ListSubsection with divider', () => {
      Terra.validates.element('subsection divider');
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

  describe('Keyboard Navigation', () => {
    before(() => browser.url('raw/tests/cerner-terra-core-docs/list/single-select-list'));

    it('should tab to the 3rd list item and put focus on it', () => {
      browser.keys(['Tab', 'Tab', 'Tab']);
      Terra.validates.element('Tab Keypress');
    });
    it('should focus the first list item when Home key is pressed', () => {
      browser.keys('Home');
      Terra.validates.element('Home Keypress');
    });
    it('should focus the last list item when End key is pressed', () => {
      browser.keys('End');
      Terra.validates.element('End Keypress');
    });
  });
});
