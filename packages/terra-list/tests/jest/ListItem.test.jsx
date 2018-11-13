import React from 'react';
import ListItem from '../../src/ListItem';

// Snapshot Tests
it('should render with className', () => {
  const shallowComponent = shallow(<ListItem className="textClass" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with content', () => {
  const shallowComponent = shallow(<ListItem><p>text</p></ListItem>);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with selected', () => {
  const shallowComponent = shallow(<ListItem isSelected />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isSelectable', () => {
  const shallowComponent = shallow(<ListItem isSelectable />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with hasChevron', () => {
  const shallowComponent = shallow(<ListItem hasChevron />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const shallowComponent = shallow(<ListItem refCallback={jest.fn()} onSelect={jest.fn()} />);
  expect(shallowComponent).toMatchSnapshot();
});
