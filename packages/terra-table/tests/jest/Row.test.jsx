import React from 'react';
import Row from '../../src/subcomponents/Row';
import Cell from '../../src/subcomponents/Cell';

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
        { content: '2.28', isMasked: false },
      ],
    },
  ],
};

describe('Row', () => {
  it('creates a row with the correct number of cells', () => {
    const rowData = tableData.rows[0];

    const wrapper = shallow(
      <Row
        id={rowData.id}
        rowIndex={99}
        height="25px"
        cells={rowData.cells}
        displayedColumns={tableData.cols}
        rowHeaderIndex={0}
      />,
    );

    const tableRow = wrapper.find('tr.row');
    expect(tableRow).toHaveLength(1);
    expect(tableRow.find(Cell)).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies the cell is created with the right props', () => {
    const rowIndex = 2;

    const verifyCell = (cellIndex, cells, expectedCells, columnId, rowId, isRowHeader) => {
      const expectedCell = expectedCells[cellIndex];

      const cell = cells.get(cellIndex);
      expect(cell.props.columnIndex).toEqual(cellIndex);
      expect(cell.props.children).toEqual(expectedCell.content);
      expect(cell.props.isMasked).toEqual(expectedCell.isMasked);
      expect(cell.props.ariaLabel).toEqual(expectedCell.ariaLabel);
      expect(cell.props.isRowHeader).toEqual(isRowHeader);
      expect(cell.key).toEqual(`${rowId}_${columnId}`);
    };

    const rowData = tableData.rows[rowIndex];

    const wrapper = shallow(
      <Row
        id={rowData.id}
        rowIndex={rowIndex}
        height="25px"
        cells={rowData.cells}
        displayedColumns={tableData.cols}
        rowHeaderIndex={0}
      />,
    );

    const renderedCells = wrapper.find(Cell);
    expect(renderedCells).toHaveLength(rowData.cells.length);
    verifyCell(0, renderedCells, rowData.cells, tableData.cols[0].id, rowData.id, true);
    verifyCell(1, renderedCells, rowData.cells, tableData.cols[1].id, rowData.id, false);
    verifyCell(2, renderedCells, rowData.cells, tableData.cols[2].id, rowData.id, false);

    expect(wrapper).toMatchSnapshot();
  });
});
