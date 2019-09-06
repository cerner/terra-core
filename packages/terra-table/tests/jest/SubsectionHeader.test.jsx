import React from 'react';
import SubsectionHeader from '../../src/SubsectionHeader';

// Snapshot test
it('should render a default subsection header', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection header with isCollpased', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" isCollapsed />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection header with isCollapsible', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" isCollapsible />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection header with level', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" level={4} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection header with metaData', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" metaData={{}} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a subsection header with onSelect', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <SubsectionHeader title="test" isCollapsible onSelect={mockCallBack} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('.subsection-header').simulate('click');
  shallowComponent.find('.subsection-header').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('.subsection-header').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a subsection header with refCallback', () => {
  const shallowComponent = shallow(
    <SubsectionHeader title="test" refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
