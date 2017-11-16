/* global browser, describe, it, expect, before, Terra */
const viewports = Terra.viewports('tiny', 'medium');

const shouldBeAccessible = () => {
  it('is accessible', () => expect(browser.axe()).to.be.accessible());
};

const shouldBeVisuallyConsistent = () => {
  it('[0] checks visual comparison', () => {
    const screenshots = browser.checkElement('[data-reactroot]', { viewports });
    expect(screenshots).to.matchReference();
  });
};

describe('Badge', () => {
  describe('Default', () => {
    before(() => browser.url('/#/tests/badge-tests/default'));
    shouldBeAccessible();
    shouldBeVisuallyConsistent();
  });

  describe('Intent', () => {
    before(() => browser.url('/#/tests/badge-tests/intent'));
    shouldBeAccessible();
    shouldBeVisuallyConsistent();
  });

  describe('Size', () => {
    before(() => browser.url('/#/tests/badge-tests/intent'));
    shouldBeAccessible();
    shouldBeVisuallyConsistent();
  });

  describe('Icons', () => {
    before(() => browser.url('/#/tests/badge-tests/icon'));
    shouldBeAccessible();
    shouldBeVisuallyConsistent();
  });
});
