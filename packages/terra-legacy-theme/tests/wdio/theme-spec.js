/* global browser, Terra, before */
describe('Legacy Theme', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Navigation Side Menu', () => {
    beforeEach(() => {
      browser.url('/#/tests');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Hover', () => {
    beforeEach(() => {
      browser.url('/#/tests');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
      browser.moveToObject('[data-menu-item="Action Footer"]');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Selected', () => {
    beforeEach(() => {
      browser.url('/#/tests');
      browser.click('[data-menu-item="Action Footer"]');
      browser.click('button[aria-label="Back"]');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });

  describe('Navigation Side Menu Selected Hover', () => {
    beforeEach(() => {
      browser.url('/#/tests');
      browser.click('[data-menu-item="Action Footer"]');
      browser.click('button[aria-label="Back"]');
      browser.execute('document.body.classList.add("terra-legacy-theme");');
      browser.moveToObject('[data-menu-item="Action Footer"]');
    });

    Terra.should.beAccessible({ context: '[data-routing-menu]' });
    Terra.should.matchScreenshot({ selector: '[data-routing-menu]' });
  });
});
