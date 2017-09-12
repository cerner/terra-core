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
it('should render MultipleSelectableRows tag', () => {
  const defaultTableRows = <Table.MultipleSelectableRows>{rows}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultipleSelectableRows with no rows', () => {
  const defaultTableRows = <Table.MultipleSelectableRows />;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultipleSelectableRows with one row', () => {
  const defaultTableRows = <Table.MultipleSelectableRows>{[row1]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render MultipleSelectableRows one selectable row and one non-selectable row', () => {
  const row3 = <Table.Row isSelectable={false} key="PERSON_1" >{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row1, row3]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should not select row on click if row is not selectable', () => {
  const row3 = <Table.Row key="PERSON_1" className="PERSON_1" isSelectable={false}>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row1, row3]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should select multiple rows', () => {
  const defaultTableRows = shallow(<Table.MultipleSelectableRows>{rows}</Table.MultipleSelectableRows>);

  defaultTableRows.find('.PERSON_0').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();

  defaultTableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  expect(defaultTableRows).toMatchSnapshot();
});

it('should have one row preselected if it was declared as selectable and selected', () => {
  const row3 = <Table.Row isSelectable isSelected key="PERSON_1">{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row1, row3]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are not selected and can be clicked if isSelected and isSelectable are undefined', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1">{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2">{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are not selected and cannot be clicked if isSelectable is false and isSelected is undefined', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelectable={false}>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelectable={false}>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are not selected and can be clicked if isSelectable is true and isSelected is undefined', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelectable>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelectable>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are not selected and can be clicked if isSelectable is undefined and isSelected is false', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelected={false}>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelected={false}>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are selected and can be clicked if isSelectable is undefined and isSelected is true', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelected>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelected>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are not selected and can be clicked if isSelectable is true and isSelected is false', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelectable isSelected={false}>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelectable isSelected={false}>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are selected and cannot be clicked if isSelectable is false and isSelected is true', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelectable={false} isSelected>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelectable={false} isSelected>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});

it('should have multiple rows that are selected and can be clicked if isSelectable is true and isSelected is true', () => {
  const row3 = <Table.Row className="PERSON_1" key="PERSON_1" isSelectable isSelected>{rowData}</Table.Row>;
  const row4 = <Table.Row className="PERSON_2" key="PERSON_2" isSelectable isSelected>{rowData}</Table.Row>;
  const defaultTableRows = <Table.MultipleSelectableRows>{[row3, row4]}</Table.MultipleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();

  tableRows.find('.PERSON_1').simulate('click', { preventDefault() {} });
  tableRows.find('.PERSON_2').simulate('click', { preventDefault() {} });
  expect(tableRows).toMatchSnapshot();
});
