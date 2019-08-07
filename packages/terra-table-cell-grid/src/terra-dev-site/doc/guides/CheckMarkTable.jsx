import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderCell, Utils, HeaderCheckMarkCell,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };

  const createTableRow = rowData => (
    <Row
      selectionStyle="checkmark"
      key={rowData.key}
      isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, selectedKeys, rowData.key)}
      isSelected={selectedKeys.indexOf(rowData.key) >= 0}
      metaData={{ key: rowData.key }}
      onSelect={handleRowSelection}
    >
      {createCellsForRow(rowData.cells)}
    </Row>
  );

  const createTableRows = data => data.map(childItem => createTableRow(childItem));

  return (
    <Table
      aria-multiselectable
      paddingStyle="standard"
      headerCells={[
        <HeaderCheckMarkCell isPadded key="derp" />,
        <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>,
        <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>,
        <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>,
        <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>,
      ]}
    >
      {createTableRows(mockData)}
    </Table>
  );
};

export default CheckMarkTable;
