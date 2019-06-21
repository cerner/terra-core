import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const SingleSelectTable = () => {
  const [selectedKey, setSelectedKey] = useState([]);

  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    if (selectedKey !== metaData.key) {
      setSelectedKey(metaData.key);
    }
  };

  const createTableRow = itemData => (
    <Row
      key={itemData.key}
      isSelectable
      isSelected={selectedKey === itemData.key}
      metaData={{ key: itemData.key }}
      onSelect={handleRowSelection}
    >
      {createCellsForRow(itemData.cells)}
    </Row>
  );

  const createTableRows = data => data.map(childItem => createTableRow(childItem));

  return (
    <Table
      paddingStyle="standard"
      headerCells={[
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

export default SingleSelectTable;
