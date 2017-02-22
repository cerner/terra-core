import React from 'react';
import initStoryshots from 'storyshots';
import List from '../src/List';
// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render with items', () => {
  const item1 = <List.Item />;
  const item2 = <List.Item />;
  const item3 = <List.Item />;
  const item4 = <List.Item />;
  const item5 = <List.Item />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<List>{items}</List>);
  expect(singleSelect).toMatchSnapshot();
});

it('should render with items', () => {
  const item1 = <List.Item />;
  const item2 = <List.Item />;
  const item3 = <List.Item />;
  const item4 = <List.Item />;
  const item5 = <List.Item />;
  const items = [item1, item2, item3, item4, item5];
  const singleSelect = shallow(<List isDivided>{items}</List>);
  expect(singleSelect).toMatchSnapshot();
});
