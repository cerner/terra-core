import React from 'react';
import Frame from '../../src/_Frame';
import intlContexts from './intl-context-setup';

describe('Frame', () => {
  it('should render a dropdown variant', () => {
    const wrapper = shallow(<Frame variant="dropdown" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant', () => {
    const wrapper = shallow(<Frame variant="list" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="dropdown" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="list" placeholder="Placeholder" />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown variant', () => {
    const wrapper = shallow(<Frame variant="dropdown" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled list variant', () => {
    const wrapper = shallow(<Frame variant="list" disabled />, intlContexts.shallowContext);
    expect(wrapper).toMatchSnapshot();
  });
});
