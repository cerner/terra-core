import React from 'react';
import Button from '../../src/_Button';

describe('Button', () => {
  it('renders a default option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a focused option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} isFocused />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active and focused option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} isActive isFocused />);
    expect(wrapper).toMatchSnapshot();
  });
});
