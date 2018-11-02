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

  it('should render a multi user avatar with custom props', () => {
    const avatar = <MultiUser alt="multi-user" style={{ color: 'purple' }} />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
