/* global browser, before, Terra */

const ignoredA11y = {
  // https://github.com/cerner/terra-core/issues/1058
  'button-name': { enabled: false },
  // https://github.com/cerner/terra-core/issues/1061
  'aria-allowed-attr': { enabled: false },
  // https://github.com/cerner/terra-core/issues/1066
  list: { enabled: false },
};

describe('Collapsible Menu View', () => {
  Terra.viewports().forEach((viewport) => {
    describe('Responsive', () => {
      before(() => {
        browser.url('/#/tests/collapsible-menu-view-tests/default');
        browser.setViewportSize(viewport);
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });
  });

  // Only test viewports that have collapsed menu items
  Terra.viewports('tiny', 'small', 'medium', 'large').forEach((viewport) => {
    describe('Responsive Hidden Open', () => {
      before(() => {
        browser.url('/#/tests/collapsible-menu-view-tests/default');
        browser.setViewportSize(viewport);
        browser.click('[data-collapsible-menu-toggle]');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible({ rules: ignoredA11y });
    });
  });

  describe('First hidden item visible when isIconOnly', () => {
    const viewports = Terra.viewports('medium');
    before(() => browser.url('/#/tests/collapsible-menu-view-tests/first-item-hidden'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoredA11y });
  });
});
