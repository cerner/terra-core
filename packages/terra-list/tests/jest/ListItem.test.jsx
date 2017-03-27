import React from 'react';
import ListItem from '../../src/ListItem';

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

it('should render with isSelectable and hasChevron', () => {
  const item = shallow(<ListItem isSelectable hasChevron />);
  expect(item).toMatchSnapshot();
});
