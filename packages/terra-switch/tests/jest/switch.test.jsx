import React from 'react';
import Switch from '../../src/Switch';

describe('Switch', () => {
  const defaultRender = <Switch labelText="default" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled when set', () => {
    const button = enzymeIntl.shallowWithIntl(<Switch labelText="Label" isDisabled />);
    expect(button).toMatchSnapshot();
    expect(button.prop('aria-disabled')).toBe(true);
  });

  // Prop Tests
  it('should use the default label text when is given', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender);
    expect(wrapper.find('.label-text').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class switch', () => {
    const wrapper = enzymeIntl.shallowWithIntl(defaultRender);
    expect(wrapper.prop('className')).toContain('switch');
  });

  it('should render block switch element when isBlock is specified', () => {
    const wrapper = enzymeIntl.shallowWithIntl(<Switch labelText="default" isBlock />);
    expect(wrapper.prop('className')).toContain('is-block');
    expect(wrapper).toMatchSnapshot();
  });
});
