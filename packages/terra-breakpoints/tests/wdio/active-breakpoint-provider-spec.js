Terra.describeViewports('ActiveBreakpointProvider',
  ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
    before(() => browser.url('/#/raw/tests/terra-breakpoints/breakpoints/active-breakpoint-provider-test'));
    Terra.it.validatesElement();
  });
