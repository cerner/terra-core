describe('Avatar', () => {
  describe('Icon Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/user-avatar'));

    Terra.should.beAccessible({ selector: '#user-avatar' });
    Terra.should.matchScreenshot({ selector: '#user-avatar' });
  });

  describe('Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-avatar'));

    Terra.should.beAccessible({ selector: '#image-avatar' });
    Terra.should.matchScreenshot({ selector: '#image-avatar' });
  });

  describe('Image Avatar Spacing', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-gap'));
    Terra.should.matchScreenshot();
  });

  describe('One Initial Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/one-initial-avatar'));

    Terra.should.beAccessible({ selector: '#one-initial-avatar' });
    Terra.should.matchScreenshot({ selector: '#one-initial-avatar' });
  });

  describe('Two Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/two-initials-avatar'));

    Terra.should.beAccessible({ selector: '#two-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#two-initials-avatar' });
  });

  describe('Deceased Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-avatar'));

    Terra.should.beAccessible({ selector: '#is-deceased-avatar' });
    Terra.should.matchScreenshot({ selector: '#is-deceased-avatar' });
  });

  describe('Deceased Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-initials-avatar'));

    Terra.should.beAccessible({ selector: '#is-deceased-initials-avatar' });
    Terra.should.matchScreenshot({ selector: '#is-deceased-initials-avatar' });
  });

  describe('Deceased Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-image-avatar'));

    Terra.should.beAccessible({ selector: '#is-deceased-image-avatar' });
    Terra.should.matchScreenshot({ selector: '#is-deceased-image-avatar' });
  });
});

describe('Facility', () => {
  describe('Icon Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/default-facility'));

    Terra.should.beAccessible({ selector: '#default-facility' });
    Terra.should.matchScreenshot({ selector: '#default-facility' });
  });

  describe('Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/image-facility'));

    Terra.should.beAccessible({ selector: '#image-facility' });
    Terra.should.matchScreenshot({ selector: '#image-facility' });
  });
});

describe('Shared User', () => {
  describe('Icon Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/shared-user/shared-user'));

    Terra.should.beAccessible({ selector: '#shared-user' });
    Terra.should.matchScreenshot({ selector: '#shared-user' });
  });
});
