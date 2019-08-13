import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCell, HeaderCheckMarkCell,
} from 'terra-table-cell-grid/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const SingleSelectTable = () => {
  const [selectedKey, setSelectedKey] = useState([]);

  const handleCellGridSelection = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };

  const createTableRow = itemData => (
    <CellGrid
      selectionStyle="checkmark"
      key={itemData.key}
      isSelectable
      isSelected={selectedKey === itemData.key}
      metaData={{ key: itemData.key }}
      onSelect={handleCellGridSelection}
    >
      {createCellsForCellGrid(itemData.cells)}
    </CellGrid>
  );

  const createTableRows = data => data.map(childItem => createTableRow(childItem));

  return (
    <TableCellGrid
      paddingStyle="standard"
      headerCells={[
        <HeaderCheckMarkCell isPadded key="check-0" />,
        <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>,
        <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>,
        <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>,
        <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>,
      ]}
    >
      {createTableRows(mockData)}
    </TableCellGrid>
  );
};

export default SingleSelectTable;
