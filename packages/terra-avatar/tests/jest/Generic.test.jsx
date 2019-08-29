import React from 'react';
import Generic from '../../src/variants/Generic';

describe('Generic', () => {
  // Single User
  it('should render a default single-user generic avatar', () => {
    const avatar = <Generic alt="single-user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user generic avatar with provided size', () => {
    const avatar = <Generic variant="single-user" alt="single-user" size="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user generic avatar with aria hidden', () => {
    const avatar = <Generic variant="single-user" alt="single-user" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user generic avatar with color variant one', () => {
    const avatar = <Generic variant="single-user" alt="single-user" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user generic avatar with color variant neutral', () => {
    const avatar = <Generic varaint="single-user" alt="single-user" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user with an automated color variant, based on a hashValue', () => {
    const avatar = <Generic varaint="single-user" alt="single-user" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a single-user generic avatar with custom props', () => {
    const avatar = <Generic varaint="single-user" alt="single-user" id="custom props single user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  // Shared User
  it('should render a shared-user avatar with provided size', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" size="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with aria hidden', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with color variant one', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user with color variant neutral', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user with an automated color variant, based on a hashValue', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with custom props', () => {
    const avatar = <Generic variant="shared-user" alt="shared-user" id="custom props shared user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  // Provider
  it('should render a provider avatar with provided size', () => {
    const avatar = <Generic variant="provider" alt="provider" size="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a provider avatar with aria hidden', () => {
    const avatar = <Generic variant="provider" alt="provider" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a provider avatar with color variant one', () => {
    const avatar = <Generic variant="provider" alt="provider" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a provider with color variant neutral', () => {
    const avatar = <Generic variant="provider" alt="provider" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a provider with an automated color variant, based on a hashValue', () => {
    const avatar = <Generic variant="provider" alt="provider" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a provider avatar with custom props', () => {
    const avatar = <Generic variant="provider" alt="provider" id="custom props provider user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
