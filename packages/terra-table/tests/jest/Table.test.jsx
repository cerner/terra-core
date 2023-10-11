import React from 'react';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';

import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import GridContext, { GridConstants } from '../../src/utils/GridContext';
import ERRORS from '../../src/utils/constants';
import Row from '../../src/subcomponents/Row';
import RowSelectionUtils from '../../src/utils/rowSelectionUtils';
import Table from '../../src/Table';

// Source data for tests
const tableData = {
  cols: [
    { id: 'Column-0', displayName: ' Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17', isSelectable: false },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)', isSelectable: false },
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

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterEach(() => {
  console.error.mockClear(); // eslint-disable-line no-console
  console.warn.mockClear(); // eslint-disable-line no-console
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('Table', () => {
  it('verifies that the table created is consistent with the rows and overflowColumns props', () => {
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
      expect(rowComponent.props.hasRowSelection).toBe(false);
      expect(rowComponent.key).toEqual(data.id);
      expect(rowComponent.props.onCellSelect).toBeUndefined();
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

  it('verifies row selection column header selection', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        hasSelectableRows
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeader = wrapper.find(ColumnHeaderCell);

    // Simulate onMouseDown event on row selection column header
    columnHeader.at(0).simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalledWith(RowSelectionUtils.ROW_SELECTION_COLUMN.id);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a masked cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          onCellSelect={mockCellSelect}
        />
        ,
      </GridContext.Provider>,
    );

    // Find column headers
    const maskedCell = wrapper.find(Row).at(0).find('.masked');

    // Simulate onMouseDown event on row selection column header
    maskedCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a non-selectable cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          onCellSelect={mockCellSelect}
        />
        ,
      </GridContext.Provider>,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find(Row).at(0).find('th:not(.selectable)');

    // Simulate onMouseDown event on row selection column header
    nonSelectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();

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

  it('sets row selection column as pinned', () => {
    const pinnedColumns = tableData.cols.slice(0, 2);

    const wrapper = mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={pinnedColumns}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          hasSelectableRows
        />
        ,
      </GridContext.Provider>,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength((pinnedColumns.length + 1) * (tableData.rows.length + 1));
  });

  it('pins row selection column if pinnedColumns is undefined', () => {
    const wrapper = mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="sdfdss"
          overflowColumns={tableData.cols}
          rows={tableData.rows}
          hasSelectableRows
        />
        ,
      </GridContext.Provider>,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(1 * (tableData.rows.length + 1));
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining(ERRORS.PINNED_COLUMNS_UNDEFINED)); // eslint-disable-line no-console
  });
});

describe('Error handling - prop types', () => {
  it('throws an error if rowHeaderIndex is not an integer', () => {
    shallowWithIntl(
      <Table
        id="test-terra-table"
        rows={tableData.rows}
        rowHeaderIndex="2"
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is not a positive integer', () => {
    shallowWithIntl(
      <Table
        id="test-terra-table"
        rows={tableData.rows}
        rowHeaderIndex={-1}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is greater than the length of pinned columns', () => {
    shallowWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowHeaderIndex={2}
        rows={tableData.rows}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED)); // eslint-disable-line no-console
  });
});
