import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import Table from '../../src/Table';
import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import Row from '../../src/subcomponents/Row';

// Source data for tests
const tableData = {
  cols: [
    { id: 'Column-0', displayName: ' Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '' },
        { content: '66', isMasked: true },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9', isMasked: true },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28', isMasked: true },
      ],
    },
    {
      id: '4',
      isSelected: true,
      cells: [
        { content: 'Oxygen Flow Rate (L/min)' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

describe('Table', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = shallowWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rows={tableData.rows}
      />,
    ).dive();

    // One row used for the header.
    const columnHeader = wrapper.find(ColumnHeader);
    expect(columnHeader).toHaveLength(1);

    // The number of rows should match the given data.
    expect(wrapper.find(Row)).toHaveLength(tableData.rows.length);
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies the rows are created with the right props', () => {
    const verifyRow = (rowIndex, rowComponent, data, overflowColumns) => {
      expect(rowComponent.props.displayedColumns).toEqual(overflowColumns);
      expect(rowComponent.key).toEqual(data.id);
      expect(rowComponent.props.rowHeaderIndex).toEqual(0);
      expect(rowComponent.props.rowIndex).toEqual(rowIndex + 1);
      expect(rowComponent.props.cells).toEqual(data.cells);
    };

    const wrapper = shallowWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={tableData.rows}
      />,
    ).dive();

    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(tableData.rows.length);
    verifyRow(0, rows.get(0), tableData.rows[0], tableData.cols);
    verifyRow(1, rows.get(1), tableData.rows[1], tableData.cols);
    verifyRow(2, rows.get(2), tableData.rows[2], tableData.cols);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('with pinned columns', () => {
  it('sets pinnedColumns as pinned', () => {
    const pinnedColumns = tableData.cols.slice(0, 2);

    const wrapper = mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={pinnedColumns}
        overflowColumns={tableData.cols.slice(2)}
        rows={tableData.rows}
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(pinnedColumns.length * (tableData.rows.length + 1));
  });
});
