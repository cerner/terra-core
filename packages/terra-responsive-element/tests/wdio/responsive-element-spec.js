Terra.describeViewports('ResponsiveElement', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  it('should display controlled ResponsiveElement', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/responsive-element/controlled');

    Terra.validates.element('controlled');
  });

  it('should display uncontrolled ResponsiveElement', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/responsive-element/uncontrolled');

    Terra.validates.element('uncontrolled');
  });

  it('should display ResponsiveElement with fixed size', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/responsive-element/fixed-size');

    // A selector is required here because the test component overflows the viewport.
    Terra.validates.element('fixed size', { selector: '#fixed-target' });
  });

  it('should display tiny and medium ResponsiveElement', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/responsive-element/tiny-and-medium');

    Terra.validates.element('tiny and medium');
  });
});
