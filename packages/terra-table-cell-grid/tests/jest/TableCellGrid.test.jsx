import React from 'react';
import TableCellGrid from '../../src/TableCellGrid';

// Snapshot test
it('should render a default table cell grid', () => {
  const shallowComponent = shallow(
    <TableCellGrid />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell grid with standard padding', () => {
  const shallowComponent = shallow(
    <TableCellGrid
      paddingStyle="standard"
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell grid with compact padding', () => {
  const shallowComponent = shallow(
    <TableCellGrid
      paddingStyle="compact"
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell grid with fill style', () => {
  const shallowComponent = shallow(
    <TableCellGrid
      fill
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell grid with header/footer nodes', () => {
  const shallowComponent = shallow(
    <TableCellGrid
      headerNode={<p>header</p>}
      footerNode={<p>footer</p>}
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});

it('should render a table cell grid with refCallback', () => {
  const shallowComponent = shallow(
    <TableCellGrid
      refCallback={jest.fn()}
    />,
  );
  expect(shallowComponent).toMatchSnapshot();
});
