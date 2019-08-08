import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderCell, Utils, CheckMarkCell, HeaderCheckMarkCell,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const handleCellSelection = (event, metaData) => {
    event.preventDefault();
    if (event.getModifierState('Control') || event.getModifierState('Meta')) {
      setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
    } else {
      setSelectedKeys([metaData.key]);
    }
    setSelectedColumns([]);
    setSelectedRows([]);
  };

  const handleColumnSelection = (event, metaData) => {
    event.preventDefault();
    if (event.getModifierState('Control') || event.getModifierState('Meta')) {
      setSelectedColumns(Utils.updatedMultiSelectedKeys(selectedColumns, metaData.index));
    } else if (selectedColumns.length === 1 && selectedColumns.indexOf(metaData.index) >= 0) {
      setSelectedColumns([]);
    } else {
      setSelectedColumns([metaData.index]);
    }
    setSelectedKeys([]);
    setSelectedRows([]);
  };

  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    if (event.getModifierState('Control') || event.getModifierState('Meta')) {
      setSelectedRows(Utils.updatedMultiSelectedKeys(selectedRows, metaData.index));
    } else if (selectedRows.length === 1 && selectedRows.indexOf(metaData.index) >= 0) {
      setSelectedRows([]);
    } else {
      setSelectedRows([metaData.index]);
    }
    setSelectedKeys([]);
    setSelectedColumns([]);
  };

  const createCell = (cellData, rowIndex, colIndex) => (
    <Cell
      key={cellData.key}
      isPadded
      isSelectable
      isSelected={selectedRows.indexOf(rowIndex) >= 0 || selectedColumns.indexOf(colIndex) >= 0 || selectedKeys.indexOf(cellData.key) >= 0}
      metaData={{ key: cellData.key }}
      onSelect={handleCellSelection}
    >
      {cellData.title}
    </Cell>
  );

  const createTableRow = (rowData, rowIndex) => (
    <Row
      key={rowData.key}
    >
      {(
        <CheckMarkCell
          isPadded
          isSelectable
          isSelected={selectedRows.indexOf(rowIndex) >= 0}
          metaData={{ index: rowIndex }}
          onSelect={handleRowSelection}
        />
      )}
      {rowData.cells.map((cellData, colIndex) => createCell(cellData, rowIndex, colIndex))}
    </Row>
  );

  const createTableRows = data => data.map((childItem, index) => createTableRow(childItem, index));

  const createHeaderCell = (key, title, index) => (
    <HeaderCell
      key={key}
      isPadded
      isSelectable
      isSelected={selectedColumns.indexOf(index) >= 0}
      metaData={{ index }}
      onSelect={handleColumnSelection}
    >
      {title}
    </HeaderCell>
  );

  return (
    <Table
      paddingStyle="standard"
      headerCells={[
        <HeaderCheckMarkCell isPadded key="derp" />,
        createHeaderCell('cell-0', 'Column 0', 0),
        createHeaderCell('cell-1', 'Column 1', 1),
        createHeaderCell('cell-2', 'Column 2', 2),
        createHeaderCell('cell-3', 'Column 3', 3),
      ]}
    >
      {createTableRows(mockData)}
    </Table>
  );
};

export default CheckMarkTable;
