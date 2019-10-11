import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell, Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const MultiSelectTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };

  const createRow = rowData => (
    <Row
      key={rowData.key}
      isSelectable
      isDisabled={!Utils.shouldBeMultiSelectable(maxSectionCount, selectedKeys, rowData.key)} // TODO: Rename?
      isSelected={selectedKeys.indexOf(rowData.key) >= 0}
      metaData={{ key: rowData.key }}
      onSelect={handleRowSelection}
    >
      {createCellsForRow(rowData.cells)}
    </Row>
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
      aria-multiselectable
      paddingStyle="standard"
      headerRow={(
        <HeaderRow>
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

export default MultiSelectTable;
