import React from 'react';
import List from '../../src/List';

// Snapshot Tests
it('should render with items', () => {
  const item1 = <List.Item key="123" />;
  const item2 = <List.Item key="123" />;
  const item3 = <List.Item key="123" />;
  const item4 = <List.Item key="123" />;
  const item5 = <List.Item key="123" />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<List>{items}</List>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render isDivided', () => {
  const item1 = <List.Item key="123" />;
  const item2 = <List.Item key="123" />;
  const item3 = <List.Item key="123" />;
  const item4 = <List.Item key="123" />;
  const item5 = <List.Item key="123" />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<List isDivided>{items}</List>);
  expect(singleSelect).toMatchSnapshot();
});

it('should mount with no items', () => {
  const singleSelect = mount(<List />);
  expect(singleSelect).toMatchSnapshot();
});

it('should mount with one items', () => {
  const item1 = <List.Item key="123" />;
  const singleSelect = mount(<List>{item1}</List>);
  expect(singleSelect).toMatchSnapshot();
});
