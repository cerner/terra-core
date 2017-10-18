/* global browser, it, viewport */
describe('badge', () => {
  const viewports = viewport('tiny', 'huge');

  it('defaults', () => {
    browser.url('/#/tests/badge-tests/default');
    browser
      .checkElement('[data-reactroot]', { viewports })
      .forEach(result => expect(result.isExactSameImage).to.be.true);
  });

  it('intents', () => {
    browser.url('/#/tests/badge-tests/intent');
    browser
      .checkElement('[data-reactroot]', { viewports })
      .forEach(result => expect(result.isExactSameImage).to.be.true);
  });

  it('sizes', () => {
    browser.url('/#/tests/badge-tests/size');
    browser
      .checkElement('[data-reactroot]', { viewports })
      .forEach(result => expect(result.isExactSameImage).to.be.true);
  });

  it('icons', () => {
    browser.url('/#/tests/badge-tests/icon');
    browser
      .checkElement('[data-reactroot]', { viewports })
      .forEach(result => expect(result.isExactSameImage).to.be.true);
  });
});
