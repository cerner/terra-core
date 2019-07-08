Terra.describeViewports('Avatar', ['huge'], () => {
  describe('Icon Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/user-avatar'));

    Terra.it.validatesElement({ selector: '#user-avatar' });
  });

  describe('Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-avatar'));

    Terra.it.validatesElement({ selector: '#image-avatar' });
  });

  describe('Invalid Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/invalid-image-avatar'));

    Terra.it.validatesElement({ selector: '#invalid-image-avatar' });
  });

  describe('Image Avatar Spacing', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/image-gap'));
    Terra.it.validatesElement();
  });

  describe('One Initial Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/one-initial-avatar'));

    Terra.it.validatesElement({ selector: '#one-initial-avatar' });
  });

  describe('Two Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/two-initials-avatar'));

    Terra.it.validatesElement({ selector: '#two-initials-avatar' });
  });

  describe('Deceased Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-avatar'));

    Terra.it.validatesElement({ selector: '#is-deceased-avatar' });
  });

  describe('Deceased Initials Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-initials-avatar'));

    Terra.it.validatesElement({ selector: '#is-deceased-initials-avatar' });
  });

  describe('Deceased Image Avatar', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/avatar/is-deceased-image-avatar'));

    Terra.it.validatesElement({ selector: '#is-deceased-image-avatar' });
  });
});

describe('Facility', () => {
  describe('Icon Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/default-facility'));

    Terra.it.validatesElement({ selector: '#default-facility' });
  });

  describe('Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/image-facility'));

    Terra.it.validatesElement({ selector: '#image-facility' });
  });

  describe('Invalid Image Facility', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/facility/invalid-image-facility'));

    Terra.it.validatesElement({ selector: '#invalid-image-facility' });
  });
});

describe('Shared User', () => {
  describe('Icon Shared User', () => {
    before(() => browser.url('/#/raw/tests/terra-avatar/avatar/shared-user/default-shared-user'));

    Terra.it.validatesElement({ selector: '#shared-user' });
  });
});
