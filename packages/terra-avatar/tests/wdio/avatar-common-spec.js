Terra.describeViewports('Avatar', ['huge'], () => {
  it('displays image Avatar', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/image-avatar');

    Terra.validates.element('image', { selector: '#image-avatar' });
  });

  it('displays image Avatar short and wide', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/image-avatar-short-and-wide');

    Terra.validates.element('image short and wide', { selector: '#image-avatar' });
  });

  it('displays image Avatar tall and narrow', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/image-avatar-tall-and-narrow');

    Terra.validates.element('image tall and narrow', { selector: '#image-avatar' });
  });

  it('displays invalid image Avatar with initials', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/invalid-image-avatar-with-initials');

    Terra.validates.element('invalid image with initials', { selector: '#invalid-image-avatar' });
  });

  it('displays image Avatar with spacing', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/image-gap');

    Terra.validates.element('image with spacing');
  });

  it('displays Avatar with one initial', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/one-initial-avatar');

    Terra.validates.element('one initial', { selector: '#one-initial-avatar' });
  });

  it('displays Avatar with two initials', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/two-initials-avatar');

    Terra.validates.element('two initials', { selector: '#two-initials-avatar' });
  });

  it('displays deceased Avatar', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/is-deceased-avatar');

    Terra.validates.element('deceased', { selector: '#is-deceased-avatar' });
  });

  it('displays deceased Avatar with initials', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/is-deceased-initials-avatar');

    Terra.validates.element('deceased with initials', { selector: '#is-deceased-initials-avatar' });
  });

  it('displays deceased image Avatar', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/avatar/is-deceased-image-avatar');

    Terra.validates.element('deceased avatar', { selector: '#is-deceased-image-avatar' });
  });
});

describe('Facility', () => {
  it('displays icon Facility', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/facility/default-facility');

    Terra.validates.element('facility icon', { selector: '#default-facility' });
  });

  it('displays image Facility', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/facility/image-facility');

    Terra.validates.element('facility image', { selector: '#image-facility' });
  });

  it('displays invalid image Facility', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/facility/invalid-image-facility');

    Terra.validates.element('facility invalid image', { selector: '#invalid-image-facility' });
  });
});

describe('Generic', () => {
  it('displays icon single user', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/generic/single-user');

    Terra.validates.element('icon single user', { selector: '#single-user' });
  });

  it('displays icon shared user', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/generic/shared-user');

    Terra.validates.element('icon shared user', { selector: '#shared-user' });
  });

  it('displays icon provider', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/avatar/generic/provider');

    Terra.validates.element('icon provider', { selector: '#provider' });
  });
});
