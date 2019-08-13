import React from 'react';
import SubsectionHeader from '../../src/SubsectionHeader';

// Snapshot test
it('should render a default subsection header', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection header with isCollpased', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection header with isCollapsible', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection header with level', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" level={4} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection header with metaData', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection header with onSelect', () => {
  const mockCallBack = jest.fn();

  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" isCollapsible onSelect={mockCallBack} />,
  );
  expect(section).toMatchSnapshot();
  section.find('tr').simulate('click');
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a subsection header with refCallback', () => {
  const section = shallow(
    <SubsectionHeader colSpan={1} title="test" refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
