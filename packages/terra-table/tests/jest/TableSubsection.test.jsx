import React from 'react';
import TableSubsection from '../../src/TableSubsection';
import TableRow from '../../src/TableRow';

// Snapshot test
it('should render a default table section', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with a row', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test">
      <TableRow />
    </TableSubsection>,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with isCollpased', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with isCollapsible', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with level', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" level={4} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with metaData', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with onSelect', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" onSelect={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section with refCallback', () => {
  const section = shallow(
    <TableSubsection colSpan={1} title="test" refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
