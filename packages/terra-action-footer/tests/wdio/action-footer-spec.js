/* global browser, Terra */
const themeables = {
  '--terra-action-footer-background-color': '#f00',
  '--terra-action-footer-border-top': 'thick double #0f0',
};

// const viewports = Terra.viewports('tiny', 'small', 'medium');

describe('ActionFooter', () => {
  describe('Empty', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/empty'));

    const selector = '#action-footer-empty';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Multiple End Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-end-actions'));

    const selector = '#action-footer-multiple-end-actions';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Multiple Start Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-start-actions'));

    const selector = '#action-footer-multiple-start-actions';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Multiple Start and End Actions', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/multiple-start-end-actions'));

    const selector = '#action-footer-multiple-start-end-actions';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Single End Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-end-action'));

    const selector = '#action-footer-single-end-action';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Single Start Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-start-action'));

    const selector = '#action-footer-single-start-action';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });

  describe('Single Start and End Action', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/single-start-end-action'));

    const selector = '#action-footer-single-start-action';

    Terra.should.beAccessible({ selector });
    Terra.should.matchScreenshot({ selector });
    Terra.should.themeEachCustomProperty(selector, themeables);
  });
});
