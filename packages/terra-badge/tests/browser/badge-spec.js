/* global browser, it, viewport */
describe('badge', () => {
  const viewports = viewport('tiny', 'huge');
  it('defaults', () => {
    browser.url('/#/tests/badge-tests/default');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
  });

  it('intents', () => {
    browser.url('/#/tests/badge-tests/intent');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
  });

  it('sizes', () => {
    browser.url('/#/tests/badge-tests/size');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
  });

  it('icons', () => {
    browser.url('/#/tests/badge-tests/icon');
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
  });
});
