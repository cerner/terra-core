/* global browser, Terra */
const themeables = {
  '--terra-action-footer-background-color': '#f00',
  '--terra-action-footer-border-top': 'thick double #0f0',
};

// const viewports = Terra.viewports('tiny', 'small', 'medium');

describe('CenteredActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/empty'));

    const selector = '#centered-action-footer-empty';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/multiple-actions'));

    const selector = '#centered-action-footer-multiple-actions';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Single Action', () => {
    beforeEach(() => browser.url('/#/tests/centered-action-footer/single-action'));

    const selector = '#centered-action-footer-single-action';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });
});
