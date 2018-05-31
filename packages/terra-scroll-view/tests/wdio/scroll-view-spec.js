/* global browser, before, Terra */

describe('ScrollView', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scroll-view/scroll-view/default');
  });

  Terra.should.beAccessible({ context: '#scroll-test' });
  Terra.should.matchScreenshot('before-click', { selector: '#scroll-test' });

  it('scroll the view', () => {
    browser.click('#scroll');
  });

  Terra.should.matchScreenshot('after-click', { selector: '#scroll-test' });
});
