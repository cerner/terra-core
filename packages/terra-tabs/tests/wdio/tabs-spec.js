/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
};

// Verify tabs collapse appropriately
describe('Tabs - Responsive', () => {
  viewports.forEach((viewport) => {
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
    describe('Extended', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tabs/tabs/extended-tabs');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
    describe('Icon Only Tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tabs/tabs/icon-only-tabs');
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
        browser.url('/#/raw/tests/tabs/tabs/default-tabs');
        browser.setViewportSize(viewport);
        browser.click('[data-terra-tabs-menu]');
      });

      Terra.should.matchScreenshot('0', { selector: '#root' });
      Terra.should.beAccessible({ rules: ignoredA11y });

      it('should close menu when tab is selected', () => {
        browser.click('#tab12');
      });

      Terra.should.beAccessible({ rules: ignoredA11y });
      Terra.should.matchScreenshot('1');
    });
  });

  // Test desktop styles and functionality
  describe('Tabs - Large screen', () => {
    before(() => browser.setViewportSize(Terra.viewports('large')[0]));
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tabs/tabs/default-tabs');
        browser.moveToObject('.tabContent');
      });

      Terra.should.themeEachCustomProperty({
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
      });

      describe('Collapsible hover', () => {
        beforeEach(() => {
          browser.waitForVisible('#tab2');
          browser.moveToObject('#tab2');
        });

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        Terra.should.themeEachCustomProperty({
          '--terra-tabs-structural-hover-background-color': 'purple',
          '--terra-tabs-structural-hover-color': 'purple',
          '--terra-tabs-structural-hover-background-size': '100% 3px',
          '--terra-tabs-structural-hover-background-image': 'linear-gradient(to bottom, purple, purple)',
        });
      });

      describe('Collapsible active focus', () => {
        beforeEach(() => {
          browser.waitForVisible('#tab2');
          browser.click('#tab2');
        });

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        Terra.should.themeEachCustomProperty({
          '--terra-tabs-structural-active-focus-background-color': 'purple',
          '--terra-tabs-structural-active-focus-color': 'purple',
          '--terra-tabs-keyboard-focus-ltr-box-shadow': 'none',
        });
      });
    });

    describe('Fill Parent Tabs', () => {
      beforeEach(() => {
        browser.url('/#/raw/tests/tabs/tabs/fill-parent-tabs');
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
      beforeEach(() => browser.url('/#/raw/tests/tabs/tabs/default-tabs'));

      Terra.should.themeEachCustomProperty({
        '--terra-tabs-menu-arrow-left-margin': '50px',
        '--terra-tabs-menu-collapsed-justify-content': 'center',
        '--terra-tabs-structural-collapsed-menu-bar-border-color': 'purple',
      });
    });
  });
});
