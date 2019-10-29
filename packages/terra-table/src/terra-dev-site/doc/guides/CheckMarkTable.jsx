import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell, Utils, CheckMarkCell, HeaderCheckMarkCell,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const rowCount = mockData.length;

  const handleMarkSelection = (event, metaData) => {
    event.preventDefault();
    event.stopPropagation();

    const newSelection = Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key);
    const isMax = newSelection.length === rowCount;
    setAllSelected(allSelected ? !isMax : isMax);
    setSelectedKeys(isMax ? [] : newSelection);
  };

  const handleHeaderMarkSelection = () => {
    setAllSelected(selectedKeys.length || !allSelected);
    setSelectedKeys([]);
  };

  const getIsRowSelected = (key) => {
    if (selectedKeys.length) {
      const isPresent = selectedKeys.indexOf(key) >= 0;
      return allSelected ? !isPresent : isPresent;
    }
    return allSelected;
  };

  const createRow = rowData => (
    <Row
      key={rowData.key}
      isSelectable
    >
      <CheckMarkCell
        isPadded
        isSelectable
        isSelected={getIsRowSelected(rowData.key)}
        metaData={{ key: rowData.key }}
        onSelect={handleMarkSelection}
      />
      {createCellsForRow(rowData.cells)}
    </Row>
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
      paddingStyle="standard"
      headerRow={(
        <HeaderRow>
          <HeaderCheckMarkCell
            isSelected={allSelected || !!selectedKeys.length}
            isIntermediate={!!selectedKeys.length}
            onSelect={handleHeaderMarkSelection}
            isPadded
            isSelectable
            key="header-check-cell"
          />
          <HeaderCell isPadded key="cell-0">Column 0</HeaderCell>
          <HeaderCell isPadded key="cell-1">Column 1</HeaderCell>
          <HeaderCell isPadded key="cell-2">Column 2</HeaderCell>
          <HeaderCell isPadded key="cell-3">Column 3</HeaderCell>
        </HeaderRow>
      )}
    >
      {createRows(mockData)}
    </Table>
  );
};

export default CheckMarkTable;
