/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

describe('ActiveBreakpointProvider', () => {
  before(() => browser.url('/#/raw/tests/terra-breakpoints/breakpoints/active-breakpoint-provider-test'));
  Terra.it.isAccessible({ viewports });
  Terra.it.matchesScreenshot({ viewports });
});
