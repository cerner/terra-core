describe('Legacy Theme', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Navigation Side Menu', () => {
    before(() => browser.url('/#/raw/tests/terra-legacy-theme/legacy-theme/legacy-theme-navigation-side-menu'));

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

  describe('Brand Footer', () => {
    before(() => browser.url('/#/raw/tests/terra-legacy-theme/legacy-theme/legacy-theme-brand-footer'));

    Terra.should.matchScreenshot('nav-background-color', { selector: '.legacy-terra-brand-footer-nav-background-color' });
    Terra.should.matchScreenshot('nav-color', { selector: '.legacy-terra-brand-footer-nav-color' });
    Terra.should.matchScreenshot('nav-header-color', { selector: '.legacy-terra-brand-footer-nav-header-color' });
    Terra.should.matchScreenshot('link-color', { selector: '.legacy-terra-brand-footer-link-color' });
    Terra.should.matchScreenshot('link-hover-color', { selector: '.legacy-terra-brand-footer-link-hover-color' });
    Terra.should.matchScreenshot('link-active-color', { selector: '.legacy-terra-brand-footer-link-active-color' });
    Terra.should.matchScreenshot('link-focus-color', { selector: '.legacy-terra-brand-footer-link-focus-color' });
    Terra.should.matchScreenshot('footer-content-background-color', { selector: '.legacy-terra-brand-footer-footer-content-background-color' });
    Terra.should.matchScreenshot('footer-content-color', { selector: '.legacy-terra-brand-footer-footer-content-color' });
  });
});
