import React from 'react';
import Button from '../../src/Button';

describe('Button', () => {
  it('renders a default option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active option', () => {
    const wrapper = shallow(<Button label="1st Option" onClick={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });
});
