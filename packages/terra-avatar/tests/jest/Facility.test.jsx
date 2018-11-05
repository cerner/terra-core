import React from 'react';
import { Facility } from '../../src/AvatarVariants';
import exampleProfilePhoto from '../../src/terra-dev-site/assets/150x150.jpg';

describe('Facility', () => {
  it('should render a default facility avatar', () => {
    const avatar = <Facility alt="London" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render image facility avatar when image is passed in', () => {
    const avatar = <Facility image={exampleProfilePhoto} alt="London" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render fallback facility avatar when invalid image is passed in', () => {
    const avatar = <Facility image="https://path/to/invalid_image.jpg" alt="London" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with a facility avatar with provided height and width', () => {
    const avatar = <Facility alt="London" height="5em" width="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a facility avatar with aria hidden', () => {
    const avatar = <Facility alt="London" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a facility avatar with color variant one', () => {
    const avatar = <Facility alt="London" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with color variant netural', () => {
    const avatar = <Facility alt="London" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an avatar with an automated color variant, based on a hashValue', () => {
    const avatar = <Facility alt="London" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a facility avatar with custom props', () => {
    const avatar = <Facility alt="London" id="custom props facility" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
