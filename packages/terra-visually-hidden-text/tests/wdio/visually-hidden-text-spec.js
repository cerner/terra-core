/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('VisuallyHiddenText', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-visually-hidden-text/visually-hidden-text/default-visually-hidden-text'));
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('NonNull', () => {
    before(() => browser.url('/#/raw/tests/terra-visually-hidden-text/visually-hidden-text/non-null-visually-hidden-text'));
    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });
});
