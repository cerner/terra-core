import React from 'react';
import Option from '../../src/_Option';

describe('Option', () => {
  it('renders a default option', () => {
    const wrapper = shallow(<Option label="1st Option" callback={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a focused option', () => {
    const wrapper = shallow(<Option label="1st Option" callback={() => {}} isFocused />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active option', () => {
    const wrapper = shallow(<Option label="1st Option" callback={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active and focused option', () => {
    const wrapper = shallow(<Option label="1st Option" callback={() => {}} isActive isFocused />);
    expect(wrapper).toMatchSnapshot();
  });
});
