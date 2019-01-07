import React from 'react';
import Avatar from '../../src/variants/Avatar';
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

  it('should render an avatar with provided size', () => {
    const avatar = <Avatar alt="user" size="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with initials and aria hidden', () => {
    const avatar = <Avatar alt="user" initials="JJ" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with color variant one', () => {
    const avatar = <Avatar alt="user" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with color variant netural', () => {
    const avatar = <Avatar alt="user" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with an automated color variant, based on a hashValue', () => {
    const avatar = <Avatar alt="user" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an isDeceased avatar', () => {
    const avatar = <Avatar alt="user" isDeceased />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with custom props', () => {
    const avatar = <Avatar alt="user" id="custom props avatar" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
