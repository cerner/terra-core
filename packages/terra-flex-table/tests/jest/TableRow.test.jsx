import React from 'react';
import TableRow from '../../src/TableRow';
import TableCell from '../../src/TableCell';

// Snapshot test
it('should render a default table row', () => {
  const tableRow = shallow(<TableRow />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a table row with a cell', () => {
  const tableRow = shallow(<TableRow><TableCell /></TableRow>);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selectable table row', () => {
  const tableRow = shallow(<TableRow isSelectable />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a selected table row', () => {
  const tableRow = shallow(<TableRow isSelectable isSelected />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a striped table row', () => {
  const tableRow = shallow(<TableRow isStriped />);
  expect(tableRow).toMatchSnapshot();
});

it('should render a table row with onSelect', () => {
  const mockCallBack = jest.fn();

  const section = shallow(
    <TableRow isSelectable onSelect={mockCallBack} />,
  );
  expect(section).toMatchSnapshot();
  section.find('tr').simulate('click');
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 13 } });
  section.find('tr').simulate('keydown', { nativeEvent: { keyCode: 32 } });
  expect(mockCallBack.mock.calls.length).toEqual(3);
});

it('should render a table row with refCallback', () => {
  const section = shallow(
    <TableRow refCallback={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});
