const viewports = Terra.viewports('tiny', 'small', 'medium', 'large', 'huge');

describe('Responsive Element', () => {
  describe('should render the appropriate element at each viewport', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/all-breakpoints'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('should render the the default element at tiny and small and medium above', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/default-and-medium'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('should render the default element at all viewports if the parent remains the same width', () => {
    before(() => browser.url('/#/raw/tests/terra-responsive-element/responsive-element/all-breakpoints-small-parent'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports, selector: '[id=root]' });
  });
});
