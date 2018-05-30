/* global browser, Terra, before */
describe('Legacy Theme', () => {
  before(() => {
    browser.setViewportSize(Terra.viewports('large')[0]);
    browser.url('/#/raw/tests/terra-legacy-theme/legacy-theme/legecy-theme-navigation-side-menu');
  });

  describe('Navigation Side Menu', () => {
    Terra.should.matchScreenshot('list-padding-top', { selector: '.legacy-nav-menu-list-padding-top' });
    Terra.should.matchScreenshot('list-background-color', { selector: '.legacy-nav-menu-list-background-color' });
    Terra.should.matchScreenshot('item-border-bottom', { selector: '.legacy-nav-menu-item-border-bottom' });
    Terra.should.matchScreenshot('item-color', { selector: '.legacy-nav-menu-item-color' });
    Terra.should.matchScreenshot('item-chevron-color', { selector: '.legacy-nav-menu-item-chevron-color' });
    Terra.should.matchScreenshot('item-hover-background-color', { selector: '.legacy-nav-menu-item-hover-background-color' });
    Terra.should.matchScreenshot('item-hover-color', { selector: '.legacy-nav-menu-item-hover-color' });
    Terra.should.matchScreenshot('item-selected-border-left', { selector: '.legacy-nav-menu-item-selected-border-left' });
    Terra.should.matchScreenshot('item-selected-font-weight', { selector: '.legacy-nav-menu-item-selected-font-weight' });
    Terra.should.matchScreenshot('item-selected-background-color', { selector: '.legacy-nav-menu-item-selected-background-color' });
    Terra.should.matchScreenshot('item-selected-color', { selector: '.legacy-nav-menu-item-selected-color' });
    Terra.should.matchScreenshot('item-selected-hover-color', { selector: '.legacy-nav-menu-item-selected-hover-color' });
    Terra.should.matchScreenshot('action-header-background-color', { selector: '.legacy-nav-menu-action-header-background-color' });
    Terra.should.matchScreenshot('action-header-border-bottom-color', { selector: '.legacy-nav-menu-action-header-border-bottom-color' });
    Terra.should.matchScreenshot('action-header-color', { selector: '.legacy-nav-menu-action-header-color' });
  });
});
