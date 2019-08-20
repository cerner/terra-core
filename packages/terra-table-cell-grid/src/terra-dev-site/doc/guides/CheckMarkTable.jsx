
import React, {
  useState,
} from 'react';
import TableCellGrid, {
  CellGrid, Cell, HeaderCellGrid, HeaderCell, Utils, CheckMarkCell, HeaderCheckMarkCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const rowCount = 5;

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const MultiSelectTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [headerState, setHeaderState] = useState('none');

  const handleMarkSelection = (event, metaData) => {
    event.preventDefault();
    event.stopPropagation();
    const newSelection = Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key);
    if (newSelection.length === rowCount) {
      setHeaderState('all');
    } else if (newSelection.length > 0) {
      setHeaderState('intermediate');
    } else {
      setHeaderState('none');
    }
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };

  const handleHeaderMarkSelection = () => {
    if (headerState === 'none') {
      setHeaderState('all');
    } else {
      setHeaderState('none');
    }
  };

  const createCellGrid = rowData => (
    <CellGrid
      key={rowData.key}
      isSelectable
    >
      {(
        <CheckMarkCell
          isPadded
          isSelectable
          isSelected={headerState === 'none' ? false : headerState === 'all' || selectedKeys.indexOf(rowData.key) >= 0}
          metaData={{ key: rowData.key }}
          onSelect={handleMarkSelection}
        />
      )}
      {createCellsForCellGrid(rowData.cells)}
    </CellGrid>
  );

  const createCellGrids = data => data.map(childItem => createCellGrid(childItem));

  return (
    <TableCellGrid
      aria-multiselectable
      paddingStyle="standard"
      headerCellGrid={(
        <HeaderCellGrid>
          <HeaderCheckMarkCell isSelected={headerState !== 'none'} isIntermediate={headerState === 'intermediate'} onSelect={handleHeaderMarkSelection} isPadded isSelectable key="derp" />
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

export default MultiSelectTable;
