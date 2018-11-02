import React from 'react';
import { Facility } from '../../src/AvatarVariants';
import exampleProfilePhoto from '../../src/terra-dev-site/assets/150x150.jpg';

describe('Facility', () => {
  it('should render a default facility avatar', () => {
    const avatar = <Facility alt="facility" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback facility avatar when more than two initials are passed in', () => {
    const avatar = <Facility initials="JSP" alt="facility" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render image facility avatar when image is passed in', () => {
    const avatar = <Facility image={exampleProfilePhoto} alt="placeholder" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback facility avatar when invalid image is passed in', () => {
    const avatar = <Facility image="https://path/to/invalid_image.jpg" alt="placeholder" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a facility avatar with provided height and width', () => {
    const avatar = <Facility alt="multi-user" height="5em" width="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a facility avatar with custom props', () => {
    const avatar = <Facility alt="facility" style={{ color: 'purple' }} />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
