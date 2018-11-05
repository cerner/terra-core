import React from 'react';
import { MultiUser } from '../../src/AvatarVariants';

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

  it('should render a facility avatar with aria hidden', () => {
    const avatar = <MultiUser alt="multi-user" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a facility avatar with color variant seven', () => {
    const avatar = <MultiUser alt="multi-user" color="seven" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a multi user avatar with custom props', () => {
    const avatar = <MultiUser alt="multi-user" id="custom props multi user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
