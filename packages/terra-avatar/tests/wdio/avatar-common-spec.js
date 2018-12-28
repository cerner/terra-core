describe('Avatar', () => {
  describe('Icon Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/user-avatar'));

    Terra.should.beAccessible({ selector: '[id=user-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=user-avatar]' });
  });

  describe('Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-avatar'));

    Terra.should.beAccessible({ selector: '[id=image-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=image-avatar]' });
  });

  describe('Image Avatar Spacing', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-gap'));
    Terra.should.matchScreenshot();
  });

  describe('One Initial Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/one-initial-avatar'));

    Terra.should.beAccessible({ selector: '[id=one-initial-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=one-initial-avatar]' });
  });

  describe('Two Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/two-initials-avatar'));

    Terra.should.beAccessible({ selector: '[id=two-initials-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=two-initials-avatar]' });
  });

  describe('Deceased Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-avatar'));

    Terra.should.beAccessible({ selector: '[id=is-deceased-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=is-deceased-avatar]' });
  });

  describe('Deceased Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-initials-avatar'));

    Terra.should.beAccessible({ selector: '[id=is-deceased-initials-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=is-deceased-initials-avatar]' });
  });

  describe('Deceased Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-image-avatar'));

    Terra.should.beAccessible({ selector: '[id=is-deceased-image-avatar]' });
    Terra.should.matchScreenshot({ selector: '[id=is-deceased-image-avatar]' });
  });
});

describe('Facility', () => {
  describe('Icon Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/default-facility'));

    Terra.should.beAccessible({ selector: '[id=default-facility]' });
    Terra.should.matchScreenshot({ selector: '[id=default-facility]' });
  });

  describe('Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/image-facility'));

    Terra.should.beAccessible({ selector: '[id=image-facility]' });
    Terra.should.matchScreenshot({ selector: '[id=image-facility]' });
  });
});

describe('Shared User', () => {
  describe('Icon Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/shared-user/shared-user'));

    Terra.should.beAccessible({ selector: '[id=shared-user]' });
    Terra.should.matchScreenshot({ selector: '[id=shared-user]' });
  });
});
