const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
};

// Verify tabs collapse appropriately
describe('Tabs - Responsive', () => {
  viewports.forEach((viewport) => {
    describe('Default', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
    describe('Extended', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/extended-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
    describe('Icon Only Tabs', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/icon-only-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
  });

  // Only test viewports that have collapsed tabs
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.click('[data-terra-tabs-menu]');
      });

      Terra.should.matchScreenshot('0', { selector: '[id=root]' });
      Terra.should.beAccessible({ rules: ignoredA11y });

      it('should close menu when tab is selected', () => {
        browser.click('[id=tab12]');
      });

      Terra.should.beAccessible({ rules: ignoredA11y });
      Terra.should.matchScreenshot('1');

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed_clicked',
        properties: {
          '--terra-tabs-collapsed-tab-menu-active-background-size': '100%',
        },
      });

      it('should have style applied when hovered', () => {
        browser.moveToObject('[data-terra-tabs-menu]');
      });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed_hover',
        properties: {
          '--terra-tabs-collapsed-tab-menu-hover-background-size': '100%',
          '--terra-tabs-structural-active-hover-background-color': 'orange',
          '--terra-tabs-structural-active-hover-background-image': 'linear-gradient(to bottom, red, #black)',
          '--terra-tabs-structural-active-hover-background-size': '50%',
          '--terra-tabs-structural-active-hover-color': 'purple',
        },
      });
    });
  });

  // Test desktop styles and functionality
  describe('Tabs - Large screen', () => {
    before(() => browser.setViewportSize(Terra.viewports('large')[0]));
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs');
        browser.moveToObject('.tabContent');
      });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-tabs-structural-content-background-color': 'purple',
          '--terra-tabs-structural-background-color': 'purple',
          '--terra-tabs-structural-background-image': 'linear-gradient(to bottom, purple, purple)',
          '--terra-tabs-structural-border-radius': '10px 10px 0 0',
          '--terra-tabs-structural-color': 'purple',
          '--terra-tabs-structural-active-background-color': 'purple',
          '--terra-tabs-structural-active-background-size': '100% 10px',
          '--terra-tabs-structural-active-color': 'purple',
          '--terra-tabs-structural-disabled-background-color': 'purple',
          '--terra-tabs-structural-disabled-color': 'purple',
          '--terra-tabs-structural-disabled-opacity': '0.1',
          '--terra-tabs-structural-disabled-label-opacity': '0',
          '--terra-tabs-structural-border-color': 'purple',
          '--terra-tabs-structural-last-tab-border-width': '1px',
          '--terra-tabs-structural-tab-bar-border-color': 'purple',
          '--terra-tabs-structural-tab-bar-border-width': '10px',
          '--terra-tabs-structural-content-box-shadow': 'inset 5px 5px 5px red',
          '--terra-tabs-structural-content-z-index': '100',
          '--terra-tabs-structural-position': 'absolute',
          '--terra-tabs-structural-before-content-background': 'red',
          '--terra-tabs-structural-before-content-height': '100px',
        },
      });

      describe('Collapsible hover', () => {
        beforeEach(() => {
          browser.waitForVisible('[id=tab2]');
          browser.moveToObject('[id=tab2]');
        });

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed',
          properties: {
            '--terra-tabs-structural-hover-background-color': 'purple',
            '--terra-tabs-structural-hover-color': 'purple',
            '--terra-tabs-structural-hover-background-size': '100% 3px',
            '--terra-tabs-structural-hover-background-image': 'linear-gradient(to bottom, purple, purple)',
          },
        });
      });

      describe('Collapsible active focus', () => {
        beforeEach(() => {
          browser.waitForVisible('[id=tab2]');
          browser.click('[id=tab2]');
        });

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        Terra.should.themeCombinationOfCustomProperties({
          testName: 'themed',
          properties: {
            '--terra-tabs-structural-active-focus-background-color': 'purple',
            '--terra-tabs-structural-active-focus-color': 'purple',
            '--terra-tabs-keyboard-focus-ltr-box-shadow': 'none',
            '--terra-tabs-structural-active-box-shadow': 'inset 5px 5px 5px red',
          },
        });
      });
    });

    describe('Fill Parent Tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/terra-tabs/tabs/tabs/fill-parent-tabs');
        browser.moveToObject('.tabContent');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
  });

  // Test small screen styles and functionality
  describe('Collapsed Tabs', () => {
    before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));
    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tabs/default-tabs'));

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-tabs-menu-arrow-left-margin': '50px',
          '--terra-tabs-menu-collapsed-justify-content': 'center',
          '--terra-tabs-structural-collapsed-menu-bar-border-color': 'purple',
        },
      });
    });
  });
});
