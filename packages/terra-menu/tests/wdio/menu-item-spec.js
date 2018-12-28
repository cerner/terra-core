const ignoredA11y = {
  'aria-required-parent': { enabled: false },
};

describe('Menu Item', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Menu Item-Default', () => {
    before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-default'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-menu-item-text-color': 'red',
        '--terra-menu-item-text-font-size': '20px',
      },
    });
  });

  describe('Menu Item-Selectable', () => {
    before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-selectable'));

    describe('Menu Item-Selectable Via Click', () => {
      it('is selected', () => {
        browser.click('.TestSelectableItem');
      });

      Terra.should.matchScreenshot('selected');
      Terra.should.beAccessible({ rules: ignoredA11y });

      it('is deselected', () => {
        browser.click('.TestSelectableItem');
      });

      Terra.should.matchScreenshot('deselected');
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Menu Item-Selectable Via Enter', () => {
      it('is selected', () => {
        browser.keys('Enter');
      });

      Terra.should.matchScreenshot('selected');
      Terra.should.beAccessible({ rules: ignoredA11y });
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-menu-item-checkmark-icon-color': 'green',
          '--terra-menu-item-checkmark-icon-font-size': '18px',
        },
      });

      it('is deselected', () => {
        browser.keys('Enter');
      });

      Terra.should.matchScreenshot('deselected');
      Terra.should.beAccessible({ rules: ignoredA11y });
    });
  });
});

describe('Menu Item-Disabled', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-disabled'));

  Terra.should.matchScreenshot();
  Terra.should.beAccessible({ rules: ignoredA11y });

  it('does not check item when clicked', () => {
    browser.click('.TestDisabledItem');
  });
  Terra.should.matchScreenshot('disabled item was not checked');
  Terra.should.themeCombinationOfCustomProperties({
    testName: 'themed',
    properties: {
      '--terra-menu-item-disabled-text-color': 'fuchsia',
      '--terra-menu-item-disabled-chevron-icon-color': 'salmon',
    },
  });
});

describe('Menu Item-Submenu Indicator', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-sub-menu'));

  Terra.should.matchScreenshot();
  Terra.should.beAccessible({ rules: ignoredA11y });
  Terra.should.themeCombinationOfCustomProperties({
    testName: 'themed',
    properties: {
      '--terra-menu-item-chevron-icon-color': 'blue',
      '--terra-menu-item-chevron-icon-font-size': '24px',
    },
  });
});

describe('Menu Item-Wrapped Text', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-wrapped-text'));

  Terra.should.matchScreenshot();
  Terra.should.beAccessible({ rules: ignoredA11y });
});

describe('Menu Item-Triggers onClick Function', () => {
  before(() => browser.url('/#/raw/tests/terra-menu/menu/menu-item/menu-item-on-click'));

  it('starts with click number of 0', () => {
    expect(browser.getText('[id=clickNumber]')).to.contain('0');
  });

  it('increments on Click', () => {
    browser.click('.TestOnClickItem');
    expect(browser.getText('[id=clickNumber]')).to.contain('1');
  });

  it('increments on Enter', () => {
    browser.keys('Enter');
    expect(browser.getText('[id=clickNumber]')).to.contain('2');
  });

  it('increments on Space', () => {
    browser.keys('Space');
    expect(browser.getText('[id=clickNumber]')).to.contain('3');
  });
});
