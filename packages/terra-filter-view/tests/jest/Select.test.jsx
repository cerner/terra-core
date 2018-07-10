import React from 'react';
import Select from '../../src/Select';
import intlContexts from './intl-context-setup';

describe('Select', () => {
  it('should render a dropdown variant', () => {
    const wrapper = shallow(<Select variant="dropdown" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant', () => {
    const wrapper = shallow(<Select variant="list" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="dropdown" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="list" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown variant', () => {
    const wrapper = shallow(<Select variant="dropdown" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled list variant', () => {
    const wrapper = shallow(<Select variant="list" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
