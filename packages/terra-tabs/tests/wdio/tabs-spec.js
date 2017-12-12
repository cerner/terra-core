/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
};

const shouldTheme = (customProperties) => {
  Object.entries(customProperties).forEach(([key, value]) => {
    it(`themed [${key}]`, () => {
      browser.setCSSCustomProps({ [key]: value });
      expect(browser.checkElement('[data-reactroot]')).to.matchReference();
    });
  });
};

// Verify tabs collapse appropriately
describe('Tabs - Responsive', () => {
  viewports.forEach((viewport) => {
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/tests/tabs-tests/default');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.beAccessible({ viewports });
    });
    describe('Extended', () => {
      beforeEach(() => {
        browser.url('/#/tests/tabs-tests/extended');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.beAccessible({ viewports });
    });
    describe('Icon Only Tabs', () => {
      beforeEach(() => {
        browser.url('/#/tests/tabs-tests/icon-only');
        browser.setViewportSize(viewport);
        browser.moveToObject('.tabContent');
      });
      Terra.should.matchScreenshot({ viewports });
      Terra.should.beAccessible({ viewports });
    });
  });

  // Only test viewports that have collapsed tabs
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/tests/tabs-tests/default');
        browser.setViewportSize(viewport);
        browser.click('[data-terra-tabs-menu]');
      });

      Terra.should.matchScreenshot('0');
      Terra.should.beAccessible({ rules: ignoredA11y });

      it('should close menu when tab is selected', () => {
        browser.click('#tab12');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('1');
    });
  });

  // Test desktop styles and functionality
  describe('Tabs - Large screen', () => {
    before(() => browser.setViewportSize(Terra.viewports('large')[0]));
    describe('Default', () => {
      beforeEach(() => {
        browser.url('/#/tests/tabs-tests/default');
        browser.moveToObject('.tabContent');
      });

      shouldTheme({
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
        '--terra-tabs-structural-border-width': '0', // why isn't this working?!?!?
        '--terra-tabs-structural-last-tab-border-width': '1px',
        '--terra-tabs-structural-tab-bar-border-color': 'purple',
        '--terra-tabs-structural-tab-bar-border-width': '10px',
      });

      it('themed [--terra-tabs-structural-container-background-color] and [--terra-tabs-structural-content-border-radius]', () => {
        browser.setCSSCustomProps({
          '--terra-tabs-structural-container-background-color': 'purple',
          '--terra-tabs-structural-content-border-radius': '0 0 50px 50px',
        });
        expect(browser.checkElement('[data-reactroot]')).to.matchReference();
      });

      it('themed [--terra-tabs-structural-background-position] and [--terra-tabs-structural-background-size]', () => {
        browser.setCSSCustomProps({
          '--terra-tabs-structural-background-size': '100% 3px',
          '--terra-tabs-structural-background-position': '0 0',
        });
        expect(browser.checkElement('[data-reactroot]')).to.matchReference();
      });

      describe('Collapsible hover', () => {
        beforeEach(() => browser.moveToObject('#tab2'));

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        shouldTheme({
          '--terra-tabs-structural-hover-background-color': 'purple',
          '--terra-tabs-structural-hover-color': 'purple',
          '--terra-tabs-structural-hover-background-size': '100% 3px',
          '--terra-tabs-structural-hover-background-image': 'linear-gradient(to bottom, purple, purple)',
        });
      });

      describe('Collapsible active focus', () => {
        beforeEach(() => browser.click('#tab2'));

        Terra.should.matchScreenshot();
        Terra.should.beAccessible();

        shouldTheme({
          '--terra-tabs-structural-active-focus-background-color': 'purple',
          '--terra-tabs-structural-active-focus-color': 'purple',
          '--terra-tabs-keyboard-focus-ltr-box-shadow': 'none',
        });
      });
    });

    describe('Fill Parent Tabs', () => {
      beforeEach(() => {
        browser.url('/#/tests/tabs-tests/fill-parent');
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
      beforeEach(() => browser.url('/#/tests/tabs-tests/default'));

      shouldTheme({
        '--terra-tabs-menu-arrow-left-margin': '50px',
        '--terra-tabs-menu-collapsed-justify-content': 'center',
        '--terra-tabs-structural-collapsed-menu-bar-border-color': 'purple',
      });
    });
  });
});
