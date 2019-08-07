import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderCell, Utils,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleCellSelection = (event, metaData) => {
    event.preventDefault();
    if (event.getModifierState('Control') || event.getModifierState('Meta')) {
      setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
    } else {
      setSelectedKeys([metaData.key]);
    }
    setSelectedColumns([]);
  };

  const handleColumnSelection = (event, metaData) => {
    event.preventDefault();
    if (event.getModifierState('Control') || event.getModifierState('Meta')) {
      setSelectedColumns(Utils.updatedMultiSelectedKeys(selectedColumns, metaData.index));
    } else {
      setSelectedColumns([metaData.index]);
    }
    setSelectedKeys([]);
  };

  const createCell = (cellData, index) => (
    <Cell
      key={cellData.key}
      isPadded
      isSelectable
      isSelected={selectedColumns.indexOf(index) >= 0 || selectedKeys.indexOf(cellData.key) >= 0}
      metaData={{ key: cellData.key }}
      onSelect={handleCellSelection}
    >
      {cellData.title}
    </Cell>
  );

  const createTableRow = rowData => (
    <Row
      key={rowData.key}
    >
      {rowData.cells.map((cellData, index) => createCell(cellData, index))}
    </Row>
  );

  const createTableRows = data => data.map(childItem => createTableRow(childItem));

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
