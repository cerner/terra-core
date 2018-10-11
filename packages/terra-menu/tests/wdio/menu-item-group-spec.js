const ignoredA11y = {
  'aria-required-parent': { enabled: false },
};

describe('Menu Item Group', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('medium')[0]);
    browser.url('/#/raw/tests/terra-menu/menu/menu-item-group/menu-item-group-default');
  });

  describe('Menu Item Group-Default', () => {
    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Menu Item Group-Selectable Via Click', () => {
    it('selects Item 3', () => {
      browser.click('.TestGroupItem3');
    });
    Terra.should.matchScreenshot('Item 3 Selected');
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('selects Item 1 and deselects Item 3', () => {
      browser.click('.TestGroupItem1');
      browser.moveToObject('h3');
    });
    Terra.should.matchScreenshot('Item 1 Selected');
  });

  describe('Menu Item Group-Selectable Via Keyboard Navigation', () => {
    it('selects Item 2 on Enter', () => {
      browser.keys(['Tab', 'Enter']);
    });
    Terra.should.matchScreenshot('Item 2 Selected');

    it('selects Item 3 on Space', () => {
      browser.keys(['Tab', 'Space']);
    });
    Terra.should.matchScreenshot('Item 3 Selected');
  });
});
