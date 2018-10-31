import React from 'react';
import { Avatar, Facility, MultiUser } from '../../src/Avatar';
import exampleProfilePhoto from '../../src/terra-dev-site/assets/150x150.jpg';

describe('Avatar', () => {
  // Snapshot Tests
  it('should render a default avatar', () => {
    const avatar = <Avatar alt="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one initial avatar when one initial is passed in', () => {
    const avatar = <Avatar initials="J" alt="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two initials avatar when two initials are passed in', () => {
    const avatar = <Avatar initials="JS" alt="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback user avatar when more than two initials are passed in', () => {
    const avatar = <Avatar initials="JJJ" alt="user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render image avatar when image is passed in', () => {
    const avatar = <Avatar image={exampleProfilePhoto} alt="placeholder" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback user avatar when invalid image is passed in', () => {
    const avatar = <Avatar image="https://path/to/invalid_image.jpg" alt="placeholder" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display warning when both image and initials props are provided', () => {
    const avatar = <Avatar image="https://path/to/invalid_image.jpg" alt="placeholder" initials="JS" />;
    try {
      render(avatar);
    } catch (object) {
      expect(object.message).toContain('Only one of the props: [image, initials] should be supplied.');
    }
  });


  it('should render an avatar with provided height and width', () => {
    const avatar = <Avatar alt="multi-user" height="5em" width="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom props', () => {
    const avatar = <Avatar alt="user" style={{ color: 'purple' }} />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});

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

describe('MultiUser', () => {
  it('should render a default multi-user avatar', () => {
    const avatar = <MultiUser alt="multi-user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a multi user with provided height and width', () => {
    const avatar = <MultiUser alt="multi-user" height="5em" width="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multi user avatar with custom props', () => {
    const avatar = <MultiUser alt="multi-user" style={{ color: 'purple' }} />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
