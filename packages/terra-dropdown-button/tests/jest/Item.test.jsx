import React from 'react';
import Item from '../../src/Item';

describe('Item', () => {
  it('renders a default item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onSelect={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an active item', () => {
    const wrapper = shallow(<Item label="1st Option" requestClose={() => {}} onSelect={() => {}} isActive />);
    expect(wrapper).toMatchSnapshot();
  });
});
