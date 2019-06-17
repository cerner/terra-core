Terra.describeViewports('ResponsiveElement', ['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], () => {
  describe('Controlled', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/controlled'));

    Terra.it.validatesElement();
  });

  describe('Uncontrolled', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/uncontrolled'));

    Terra.it.validatesElement();
  });

  describe('Fixed Size', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/fixed-size'));

    // A selector is required here because the test component overflows the viewport.
    Terra.it.validatesElement({ selector: '#fixed-target' });
  });

  describe('Tiny and Medium', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/tiny-and-medium'));

    Terra.it.validatesElement();
  });
});
