import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell className="NAME" content="John Smith" key="NAME" />;
const cellData2 = <Table.Cell className="ADDRESS" content="123 Adams Drive" key="ADDRESS" />;
const cellData3 = <Table.Cell className="PHONE_NUMBER" content="111-222-3333" key="PHONE_NUMBER" />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key="PERSON_0" className="PERSON_0" isSelectable>{rowData}</Table.Row>;
const row2 = <Table.Row key="PERSON_1" className="PERSON_1" isSelected isSelectable>{rowData}</Table.Row>;
const rows = [row1, row2];

// Snapshot test
it('should render SingleSelectableRows tag', () => {
  const defaultTableRows = <Table.SingleSelectableRows>{rows}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render SingleSelectableRows with no rows', () => {
  const defaultTableRows = <Table.SingleSelectableRows />;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render SingleSelectableRows with one row', () => {
  const defaultTableRows = <Table.SingleSelectableRows>{[row1]}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render SingleSelectableRows one selectable row and one non-selectable row', () => {
  const row3 = <Table.Row isSelectable={false} key="PERSON_1">{rowData}</Table.Row>;
  const defaultTableRows = <Table.SingleSelectableRows>{[row1, row3]}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should select an row', () => {
  const defaultTableRows = shallow(<Table.SingleSelectableRows>{rows}</Table.SingleSelectableRows>);

  defaultTableRows.find('.PERSON_0').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();

  defaultTableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();
});
