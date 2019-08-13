import React from 'react';
import SectionHeader from '../../src/SectionHeader';

// Snapshot test
it('should render a default section header', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section header with isCollpased', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section header with isCollapsible', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section header with level', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" level={3} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section header with metaData', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a section header with onSelect', () => {
  const mockCallBack = jest.fn();

  const section = shallow(
    <SectionHeader colSpan={1} title="test" isCollapsible onSelect={mockCallBack} />,
  );
  expect(section).toMatchSnapshot();
  section.find('tr').simulate('click');
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a section header with refCallback', () => {
  const section = shallow(
    <SectionHeader colSpan={1} title="test" refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
