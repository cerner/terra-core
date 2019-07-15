import React from 'react';
import Item from '../../src/Item';

describe('Item', () => {
  it('renders a default item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onClick={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });
});
