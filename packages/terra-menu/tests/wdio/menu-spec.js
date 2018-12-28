const ignoredA11y = {
  // Issue logged here: https://github.com/cerner/terra-core/issues/1585
  'button-name': { enabled: false },
};

describe('Menu', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Menu-Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/default-menu');
      browser.click('[id=default-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/bounded-menu');
      browser.click('[id=bounded-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('opens submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('submenu', { selector: '[id=root]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Menu-Small Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/small-menu');
      browser.click('[id=small-menu-button]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Medium Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/medium-menu');
      browser.click('[id=medium-menu-button]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Large Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/large-menu');
      browser.click('[id=large-menu-button]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Non-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/non-selectable-menu');
      browser.click('[id=non-selectable-menu-button]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-menu');
      browser.click('[id=selectable-menu-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      browser.click('.TestGroupItem3');
      browser.hasFocus('li:last-child[aria-selected="true"][role="menuitemradio"]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();
  });

  describe('Menu-Selectable with Varying Items', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-and-unselectable-items-menu');
      browser.click('[id=default-button]');
    });

    Terra.should.matchScreenshot({ selector: '[id=root]' });
    Terra.should.beAccessible();

    it('selects an item and maintains selection after menu has been reopened', () => {
      browser.click('.TestSelectableItem');
      browser.hasFocus('[id=default-button]');
      browser.click('[id=default-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('maintained selection after reopen', { selector: '[id=root]' });
  });

  describe('Menu with a submenu', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('[id=sub-menu-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot('main menu', { selector: '[id=root]' });
    Terra.should.beAccessible();

    it('displays the submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('submenu', { selector: '[id=root]' });
  });

  describe('Menu Keyboard Navigation-Arrow Keys', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('[id=sub-menu-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    it('does not do anything when left arrow is pressed on the first layer', () => {
      browser.keys(['Tab', 'ArrowLeft']);
      browser.hasFocus('li:first-child[class*="item"][role="menuitem"]');
    });
    Terra.should.matchScreenshot('main menu remains open', { selector: '[id=root]' });

    it('displays the submenu on right arrow', () => {
      browser.keys(['ArrowDown', 'ArrowRight']);
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('navigated to submenu', { selector: '[id=root]' });

    it('returns to the main menu on left arrow', () => {
      browser.keys(['ArrowLeft']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('returned to main menu', { selector: '[id=root]' });
  });

  describe('Menu Keyboard Navigation-Enter Key', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('[id=sub-menu-button]');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    it('displays the submenu on enter', () => {
      browser.keys(['Tab', 'ArrowDown', 'Enter']);
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('navigated to submenu', { selector: '[id=root]' });

    it('returns to the main menu on enter', () => {
      browser.keys(['Enter']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('returned to main menu', { selector: '[id=root]' });
  });
});
