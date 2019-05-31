describe('Legacy Theme', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));

  describe('Navigation Side Menu', () => {
    before(() => browser.url('/#/raw/tests/terra-legacy-theme/legacy-theme/legacy-theme-navigation-side-menu'));

    Terra.it.matchesScreenshot('list-padding-top', { selector: '.legacy-nav-menu-list-padding-top' });
    Terra.it.matchesScreenshot('list-background-color', { selector: '.legacy-nav-menu-list-background-color' });
    Terra.it.matchesScreenshot('item-border-bottom', { selector: '.legacy-nav-menu-item-border-bottom' });
    Terra.it.matchesScreenshot('item-color', { selector: '.legacy-nav-menu-item-color' });
    Terra.it.matchesScreenshot('item-chevron-color', { selector: '.legacy-nav-menu-item-chevron-color' });
    Terra.it.matchesScreenshot('item-hover-background-color', { selector: '.legacy-nav-menu-item-hover-background-color' });
    Terra.it.matchesScreenshot('item-hover-color', { selector: '.legacy-nav-menu-item-hover-color' });
    Terra.it.matchesScreenshot('item-selected-border-left', { selector: '.legacy-nav-menu-item-selected-border-left' });
    Terra.it.matchesScreenshot('item-selected-font-weight', { selector: '.legacy-nav-menu-item-selected-font-weight' });
    Terra.it.matchesScreenshot('item-selected-background-color', { selector: '.legacy-nav-menu-item-selected-background-color' });
    Terra.it.matchesScreenshot('item-selected-color', { selector: '.legacy-nav-menu-item-selected-color' });
    Terra.it.matchesScreenshot('item-selected-hover-color', { selector: '.legacy-nav-menu-item-selected-hover-color' });
    Terra.it.matchesScreenshot('action-header-background-color', { selector: '.legacy-nav-menu-action-header-background-color' });
    Terra.it.matchesScreenshot('action-header-border-bottom-color', { selector: '.legacy-nav-menu-action-header-border-bottom-color' });
    Terra.it.matchesScreenshot('action-header-color', { selector: '.legacy-nav-menu-action-header-color' });
  });

  describe('Brand Footer', () => {
    before(() => browser.url('/#/raw/tests/terra-legacy-theme/legacy-theme/legacy-theme-brand-footer'));

    Terra.it.matchesScreenshot('nav-background-color', { selector: '.legacy-terra-brand-footer-nav-background-color' });
    Terra.it.matchesScreenshot('nav-color', { selector: '.legacy-terra-brand-footer-nav-color' });
    Terra.it.matchesScreenshot('nav-header-color', { selector: '.legacy-terra-brand-footer-nav-header-color' });
    Terra.it.matchesScreenshot('link-color', { selector: '.legacy-terra-brand-footer-link-color' });
    Terra.it.matchesScreenshot('link-hover-color', { selector: '.legacy-terra-brand-footer-link-hover-color' });
    Terra.it.matchesScreenshot('link-active-color', { selector: '.legacy-terra-brand-footer-link-active-color' });
    Terra.it.matchesScreenshot('link-focus-color', { selector: '.legacy-terra-brand-footer-link-focus-color' });
    Terra.it.matchesScreenshot('footer-content-background-color', { selector: '.legacy-terra-brand-footer-footer-content-background-color' });
    Terra.it.matchesScreenshot('footer-content-color', { selector: '.legacy-terra-brand-footer-footer-content-color' });
  });
});
