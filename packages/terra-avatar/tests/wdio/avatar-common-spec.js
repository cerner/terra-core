describe('Avatar', () => {
  describe('User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/user-avatar'));

    Terra.should.beAccessible({ selector: '#user-avatar' });
    Terra.should.matchScreenshot({ selector: '#user-avatar' });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/image-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });
  });

  describe('Image Spacing', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/image-gap'));
    Terra.should.matchScreenshot();
  });

  describe('One Initial', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/one-initial-avatar'));

    Terra.should.beAccessible({ selector: '#one-initial-avatar' });
    Terra.should.matchScreenshot({ selector: '#one-initial-avatar' });
  });

  describe('Two Initials', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/two-initials-avatar'));

    Terra.should.beAccessible({ selector: '#two-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#two-initials-avatar' });
  });

  describe('IsDeceased', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/is-deceased-avatar'));

    Terra.should.beAccessible({ selector: '#is-deceased-avatar' });
    Terra.should.matchScreenshot({ selector: '#is-deceased-avatar' });
  });

  describe('IsDeceased Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/is-deceased-image-avatar'));

    Terra.should.beAccessible({ selector: '#is-deceased-image-avatar' });
    Terra.should.matchScreenshot({ selector: '#is-deceased-image-avatar' });
  });
});

describe('Facility', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/default-facility'));

    Terra.should.beAccessible({ selector: '#default-facility' });
    Terra.should.matchScreenshot({ selector: '#default-facility' });
  });

  describe('Image', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/facility/image-facility'));

    Terra.should.beAccessible({ selector: '#image-facility' });
    Terra.should.matchScreenshot({ selector: '#image-facility' });
  });
});

describe('Shared User', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/shared-user/shared-user'));

    Terra.should.beAccessible({ selector: '#shared-user' });
    Terra.should.matchScreenshot({ selector: '#shared-user' });
  });
});
