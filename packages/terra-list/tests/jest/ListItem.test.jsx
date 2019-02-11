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
  const shallowComponent = shallow(<ListItem isSelectable isSelected />);
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
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <ListItem title="test" isSelectable onSelect={mockCallBack} refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('li').simulate('click');
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});
