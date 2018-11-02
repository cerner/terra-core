describe('Avatar', () => {
  describe('User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/user-avatar'));

    Terra.should.beAccessible({ selector: '#user-avatar' });
    Terra.should.matchScreenshot({ selector: '#user-avatar' });

    it('Expect user avatar to have avatar class', () => {
      expect(browser.getAttribute('#user-avatar', 'class')).contains('avatar');
    });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/image-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });

    it('Expect image avatar to have image class', () => {
      expect(browser.getAttribute('#image-avatar', 'class')).contains('avatar');
    });
  });

  describe('Image Spacing', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/image-gap'));
    Terra.should.matchScreenshot();
  });


  describe('One Initial', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/one-initial-avatar'));

    Terra.should.beAccessible({ selector: '#one-initial-avatar' });
    Terra.should.matchScreenshot({ selector: '#one-initial-avatar' });

    it('Expect three initials avatar to have avatar class', () => {
      expect(browser.getAttribute('#three-initials-avatar', 'class')).contains('avatar');
    });
  });

  describe('Two Initials', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/two-initials-avatar'));

    Terra.should.beAccessible({ selector: '#two-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#two-initials-avatar' });

    it('Expect two initials avatar to have avatar class', () => {
      expect(browser.getAttribute('#two-initials-avatar', 'class')).contains('avatar');
    });
  });

  describe('Color Variant', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/color-variant-avatar'));

    Terra.should.beAccessible({ selector: '#color-variant-avatar' });
    Terra.should.matchScreenshot({ selector: '#color-variant-avatar' });

    it('Expect color variant avatar to have variant class', () => {
      expect(browser.getAttribute('#color-variant-avatar', 'class')).contains('three');
    });
  });
});
