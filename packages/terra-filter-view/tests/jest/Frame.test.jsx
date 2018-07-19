import React from 'react';
import Frame from '../../src/_Frame';

describe('Frame', () => {
  it('should render a dropdown variant', () => {
    const wrapper = shallow(<Frame variant="dropdown" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant', () => {
    const wrapper = shallow(<Frame variant="list" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a dropdown variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="dropdown" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list variant with a placeholder', () => {
    const wrapper = shallow(<Frame variant="list" placeholder="Placeholder" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled dropdown variant', () => {
    const wrapper = shallow(<Frame variant="dropdown" disabled />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a disabled list variant', () => {
    const wrapper = shallow(<Frame variant="list" disabled />);
    expect(wrapper).toMatchSnapshot();
  });
});
