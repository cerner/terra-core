import React from 'react';
import initStoryshots from 'storyshots';
import ListItem from '../src/ListItem';
// Run snapshot tests for react-storybook
initStoryshots();

// Snapshot Tests
it('should render with className', () => {
  const item = shallow(<ListItem className="textClass" />);
  expect(item).toMatchSnapshot();
});

it('should render with content', () => {
  const textContent = <p>text</p>;
  const item = shallow(<ListItem content={textContent} />);
  expect(item).toMatchSnapshot();
});

it('should render with selected', () => {
  const item = shallow(<ListItem isSelected />);
  expect(item).toMatchSnapshot();
});

it('should render with isSelectable', () => {
  const item = shallow(<ListItem isSelectable />);
  expect(item).toMatchSnapshot();
});

it('should render with isSelectable', () => {
  const item = shallow(<ListItem isSelectable hasChevron />);
  expect(item).toMatchSnapshot();
});
