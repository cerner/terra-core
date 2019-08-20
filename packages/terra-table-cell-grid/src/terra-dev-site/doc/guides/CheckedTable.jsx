import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell, Utils,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleCellGridSelection = (event, metaData) => {
    event.preventDefault();
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };

  const createCellGrid = rowData => (
    <CellGrid
      selectionStyle="checkmark"
      key={rowData.key}
      isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, selectedKeys, rowData.key)}
      isSelected={selectedKeys.indexOf(rowData.key) >= 0}
      metaData={{ key: rowData.key }}
      onSelect={handleCellGridSelection}
    >
      {createCellsForCellGrid(rowData.cells)}
    </CellGrid>
  );

  const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

  return (
    <TableCellGrid
      aria-multiselectable
      paddingStyle="standard"
      headerCellGrid={(
        <HeaderCellGrid selectionStyle="checkmark">
          <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>
        </HeaderCellGrid>
      )}
    >
      {createCellGrids(mockData)}
    </TableCellGrid>
  );
};

export default CheckMarkTable;
