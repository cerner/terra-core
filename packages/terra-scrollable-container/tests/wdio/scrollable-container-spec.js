/* global browser, before, Terra */

describe('ScrollableContainer', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scrollable-container/scrollable-container/default');
  });

  Terra.should.beAccessible({ context: '#scroll-test' });
  Terra.should.matchScreenshot('before-click', { selector: '#scroll-test' });

  it('scroll the container', () => {
    browser.click('#scroll');
  });

  Terra.should.matchScreenshot('after-click', { selector: '#scroll-test' });
});
