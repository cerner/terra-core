import React from 'react';
import Select from '../../src/_Select';

describe('Select', () => {
  it('should render a dropdown variant', () => {
    const wrapper = shallow(<Select variant="dropdown" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant', () => {
    const wrapper = shallow(<Select variant="list" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="dropdown" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant with a placeholder', () => {
    const wrapper = shallow(<Select variant="list" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown variant', () => {
    const wrapper = shallow(<Select variant="dropdown" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled list variant', () => {
    const wrapper = shallow(<Select variant="list" disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
