/* global browser, Terra, before */
describe('Legacy Theme', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Navigation Side Menu', () => {
    beforeEach(() => {
      browser.url('/#/site/components');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Hover', () => {
    beforeEach(() => {
      browser.url('/#/site/components');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
      browser.moveToObject('[data-menu-item="Site"]');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Selected', () => {
    beforeEach(() => {
      browser.url('/#/site/components');
      browser.click('[data-menu-item="Site"]');
      browser.click('button[aria-label="Back"]');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
    });

    // aXe picks up the wrong background color of #434a4d and compares it to the selected text color of #78c346
    const ignoredA11y = {
      'color-contrast': { enabled: false },
    };

    Terra.should.beAccessible({ context: '[data-routing-menu]', rules: ignoredA11y });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Selected Hover', () => {
    beforeEach(() => {
      browser.url('/#/site/components');
      browser.click('[data-menu-item="Site"]');
      browser.click('button[aria-label="Back"]');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
      browser.moveToObject('[data-menu-item="Site"]');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });
});
