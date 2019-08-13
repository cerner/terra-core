import React from 'react';
import Subsection from '../../src/Subsection';
import CellGrid from '../../src/CellGrid';

// Snapshot test
it('should render a default subsection', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with a cellgrid', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test">
      <CellGrid />
    </Subsection>,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with isCollpased', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with isCollapsible', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with level', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" level={4} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with metaData', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with onSelect', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" onSelect={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a subsection with refCallback', () => {
  const section = shallow(
    <Subsection colSpan={1} title="test" refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
