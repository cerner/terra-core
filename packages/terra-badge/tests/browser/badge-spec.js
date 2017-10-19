/* global browser, it, viewport */
describe('badge', () => {
  const viewports = viewport('tiny', 'huge');
  it('defaults', () => {
    browser.url('/#/tests/badge-tests/default');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
    expect(browser.a11y({ viewports })).to.be.accessible();
  });

  it('intents', () => {
    browser.url('/#/tests/badge-tests/intent');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
    expect(browser.a11y({ viewports })).to.be.accessible();
  });

  it('sizes', () => {
    browser.url('/#/tests/badge-tests/size');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
    expect(browser.a11y({ viewports })).to.be.accessible();
  });

  it('icons', () => {
    browser.url('/#/tests/badge-tests/icon');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
    expect(browser.a11y({ viewports })).to.be.accessible();
  });
});
