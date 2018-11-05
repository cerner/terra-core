describe('Facility', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/default'));

    Terra.should.beAccessible({ selector: '#facility' });
    Terra.should.matchScreenshot({ selector: '#facility' });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/facility-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });
  });

  describe('Color Variant', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/color-variant-avatar'));

    Terra.should.beAccessible({ selector: '#color-variant-facility' });
    Terra.should.matchScreenshot({ selector: '#color-variant-facility' });
  });
});
