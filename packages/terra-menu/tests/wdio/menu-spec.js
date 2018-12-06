const ignoredA11y = {
  // Issue logged here: https://github.com/cerner/terra-core/issues/1585
  'button-name': { enabled: false },
};

describe('Menu', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Menu-Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/default-menu');
      browser.click('#default-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Bounded', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/bounded-menu');
      browser.click('#bounded-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('opens submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('submenu', { selector: '#root' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Menu-Small Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/small-menu');
      browser.click('#small-menu-button');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Medium Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/medium-menu');
      browser.click('#medium-menu-button');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Large Height', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/large-menu');
      browser.click('#large-menu-button');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Non-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/non-selectable-menu');
      browser.click('#non-selectable-menu-button');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-menu');
      browser.click('#selectable-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
      browser.click('.TestGroupItem3');
      browser.hasFocus('li:last-child[aria-checked="true"][role="menuitemradio"]');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();
  });

  describe('Menu-Selectable with Varying Items', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/selectable-and-unselectable-items-menu');
      browser.click('#default-button');
    });

    Terra.should.matchScreenshot({ selector: '#root' });
    Terra.should.beAccessible();

    it('selects an item and maintains selection after menu has been reopened', () => {
      browser.click('.TestSelectableItem');
      browser.hasFocus('#default-button');
      browser.click('#default-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('maintained selection after reopen', { selector: '#root' });
  });

  describe('Menu with a submenu', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    Terra.should.matchScreenshot('main menu', { selector: '#root' });
    Terra.should.beAccessible();

    it('displays the submenu', () => {
      browser.click('.TestNestedMenu');
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('submenu', { selector: '#root' });
  });

  describe('Menu Keyboard Navigation-Arrow Keys', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    it('does not do anything when left arrow is pressed on the first layer', () => {
      browser.keys(['Tab', 'ArrowLeft']);
      browser.hasFocus('li:first-child[class*="item"][role="menuitem"]');
    });
    Terra.should.matchScreenshot('main menu remains open', { selector: '#root' });

    it('displays the submenu on right arrow', () => {
      browser.keys(['ArrowDown', 'ArrowRight']);
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('navigated to submenu', { selector: '#root' });

    it('returns to the main menu on left arrow', () => {
      browser.keys(['ArrowLeft']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('returned to main menu', { selector: '#root' });
  });

  describe('Menu Keyboard Navigation-Enter Key', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-menu/menu/menu/sub-menu');
      browser.click('#sub-menu-button');
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });

    it('displays the submenu on enter', () => {
      browser.keys(['Tab', 'ArrowDown', 'Enter']);
      browser.hasFocus('[role="button"][aria-label="Back"]');
    });
    Terra.should.matchScreenshot('navigated to submenu', { selector: '#root' });

    it('returns to the main menu on enter', () => {
      browser.keys(['Enter']);
      browser.hasFocus('[class*="content"][aria-modal="true"][role="dialog"]');
    });
    Terra.should.matchScreenshot('returned to main menu', { selector: '#root' });
  });
});
