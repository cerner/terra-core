Terra.describeViewports('ActiveBreakpointProvider', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('displays default Breakpoints', () => {
    browser.url('/raw/tests/terra-breakpoints/breakpoints/active-breakpoint-provider-test');
    Terra.validates.element('default');
  });
});
