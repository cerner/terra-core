import React from 'react';
import Item from '../../src/Item';

describe('Item', () => {
  it('renders a default item', () => {
    const wrapper = shallow(<Item label="1st Option" onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active item', () => {
    const wrapper = shallow(<Item label="1st Option" onClick={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });
});
