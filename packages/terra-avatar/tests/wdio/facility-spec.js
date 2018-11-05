describe('Facility', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/default'));

    Terra.should.beAccessible({ selector: '#facility' });
    Terra.should.matchScreenshot({ selector: '#facility' });

    // it('Expect facility avatar to have avatar class', () => {
    //   expect(browser.getAttribute('#facility', 'class')).contains('avatar');
    // });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/facility-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });

    // it('Expect image avatar to have image class', () => {
    //   expect(browser.getAttribute('#image-avatar', 'class')).contains('avatar');
    // });
  });

  describe('Color Variant', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/color-variant-avatar'));

    Terra.should.beAccessible({ selector: '#color-variant-facility' });
    Terra.should.matchScreenshot({ selector: '#color-variant-facility' });

    // it('Expect color variant avatar to have variant class', () => {
    //   expect(browser.getAttribute('#color-variant-facility', 'class')).contains('five');
    // });
  });
});
