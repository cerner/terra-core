import React from 'react';
import Docs from '../../src/Docs';

describe('Docs', () => {
  const defaultRender = <Docs />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.docs').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class docs', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('docs');
  });
});
