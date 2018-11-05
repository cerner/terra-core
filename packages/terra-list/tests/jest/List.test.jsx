import React from 'react';
import List, { Item } from '../../src/List';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <Item key="123" />;
  const item2 = <Item key="124" />;
  const item3 = <Item key="125" />;
  const item4 = <Item key="126" />;
  const item5 = <Item key="127" />;
  const items = [item1, item2, item3, item4, item5];
  const shallowComponent = shallow(<List>{items}</List>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with no items', () => {
  const shallowComponent = shallow(<List />);
  expect(shallowComponent).toMatchSnapshot();
});
