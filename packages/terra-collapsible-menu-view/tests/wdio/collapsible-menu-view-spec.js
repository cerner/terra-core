/* global browser, before, Terra */

// TODO: Remove once https://github.com/cerner/terra-core/issues/1058 and
// https://github.com/cerner/terra-core/issues/1061 is  resolved
const ignoreButtonName = {
  'button-name': { enabled: false },
  'aria-allowed-attr': { enabled: false },
};

describe('Collapsible Menu View', () => {
  describe('Responsive', () => {
    const viewports = Terra.viewports();
    before(() => browser.url('/#/tests/collapsible-menu-view-tests/default'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoreButtonName });
  });

  describe('First hidden item visible when isIconOnly', () => {
    const viewports = Terra.viewports('medium');
    before(() => browser.url('/#/tests/collapsible-menu-view-tests/first-item-hidden'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports, rules: ignoreButtonName });
  });
});
