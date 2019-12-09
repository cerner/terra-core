import React from 'react';
import SectionHeader from '../../../src/subcomponents/SectionHeader';

// Snapshot Tests
it('should render default', () => {
  const shallowComponent = shallow(<SectionHeader title="test" numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with level', () => {
  const shallowComponent = shallow(<SectionHeader title="test" level={3} numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsed', () => {
  const shallowComponent = shallow(<SectionHeader title="test" isCollapsed numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with isCollapsible', () => {
  const shallowComponent = shallow(<SectionHeader title="test" isCollapsible numberOfColumns={1} />);
  expect(shallowComponent).toMatchSnapshot();
});

it('should render with callback functions', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <SectionHeader title="test" isCollapsible onSelect={mockCallBack} refCallback={jest.fn()} numberOfColumns={1} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('[role="columnheader"]').simulate('click');
  shallowComponent.find('[role="columnheader"]').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('[role="columnheader"]').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});
