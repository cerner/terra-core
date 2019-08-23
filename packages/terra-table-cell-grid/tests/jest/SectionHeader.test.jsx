import React from 'react';
import SectionHeader from '../../src/SectionHeader';

// Snapshot test
it('should render a default section header', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section header with isCollpased', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" isCollapsed />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section header with isCollapsible', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" isCollapsible />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section header with level', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" level={3} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section header with metaData', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" metaData={{}} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a section header with onSelect', () => {
  const mockCallBack = jest.fn();

  const shallowComponent = shallow(
    <SectionHeader title="test" isCollapsible onSelect={mockCallBack} />,
  );
  expect(shallowComponent).toMatchSnapshot();
  shallowComponent.find('.section-content').simulate('click');
  shallowComponent.find('.section-content').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  shallowComponent.find('.section-content').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a section header with refCallback', () => {
  const shallowComponent = shallow(
    <SectionHeader title="test" refCallback={jest.fn()} />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
