import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell content="John Smith" key="NAME" />;
const cellData2 = <Table.Cell content="123 Adams Drive" key="ADDRESS" />;
const cellData3 = <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key="PERSON_0" className="PERSON_0">{rowData}</Table.Row>;
const row2 = <Table.Row key="PERSON_1" className="PERSON_1">{rowData}</Table.Row>;
const rows = [row1, row2];

// Snapshot test
it('should render MultiSelectableRows tag', () => {
  const defaultTableRows = <Table.MultiSelectableRows>{rows}</Table.MultiSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultiSelectableRows with no rows', () => {
  const defaultTableRows = <Table.MultiSelectableRows />;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultiSelectableRows with one row', () => {
  const defaultTableRows = <Table.MultiSelectableRows>{[row1]}</Table.MultiSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultiSelectableRows one selectable row and one non-selectable row', () => {
  const row3 = <Table.Row isSelectable={false} key="PERSON_1">{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultiSelectableRows>{[row1, row3]}</Table.MultiSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should select a row', () => {
  const defaultTableRows = shallow(<Table.MultiSelectableRows>{rows}</Table.MultiSelectableRows>);

  defaultTableRows.find('.PERSON_0').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();

  defaultTableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();
});

it('selectedIndexes should only allow the first rows up to the max count to be selected', () => {
  const row3 = <Table.Row key="PERSON_1" className="PERSON_1" isSelected>{rowData}</Table.Row>;
  const row4 = <Table.Row key="PERSON_2" className="PERSON_2" isSelected>{rowData}</Table.Row>;
  const row5 = <Table.Row key="PERSON_3" className="PERSON_3" isSelected>{rowData}</Table.Row>;

  const defaultTableRows = <Table.MultiSelectableRows maxSelectionCount={2}>{[row3, row4, row5]}</Table.MultiSelectableRows>;
  const tableRows = shallow(defaultTableRows);

  expect(tableRows).toMatchSnapshot();
  tableRows.find('.PERSON_3').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});
