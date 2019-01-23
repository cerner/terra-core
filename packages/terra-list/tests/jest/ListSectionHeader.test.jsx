import React from 'react';
import ListSectionHeader from '../../src/ListSectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" level={3} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" isCollapsed />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<ListSectionHeader title="test" isCollapsible />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <ListSectionHeader title="test" isCollapsible onSelect={mockCallBack} refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('li').simulate('click');
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('li').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});
