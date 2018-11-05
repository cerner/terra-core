import React from 'react';
import { SharedUser } from '../../src/AvatarVariants';

describe('SharedUser', () => {
  it('should render a default shared-user avatar', () => {
    const avatar = <SharedUser alt="shared-user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with provided height and width', () => {
    const avatar = <SharedUser alt="shared-user" height="5em" width="5em" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with aria hidden', () => {
    const avatar = <SharedUser alt="shared-user" isAriaHidden />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with color variant one', () => {
    const avatar = <SharedUser alt="shared-user" color="one" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user with color variant neutral', () => {
    const avatar = <SharedUser alt="shared-user" color="neutral" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user with an automated color variant, based on a hashValue', () => {
    const avatar = <SharedUser alt="shared-user" hashValue="alternative hash" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a shared-user avatar with custom props', () => {
    const avatar = <SharedUser alt="shared-user" id="custom props shared user" />;
    const wrapper = render(avatar);
    expect(wrapper).toMatchSnapshot();
  });
});
