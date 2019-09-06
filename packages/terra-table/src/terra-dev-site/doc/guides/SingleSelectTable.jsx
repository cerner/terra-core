import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderRow, HeaderCell,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
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

  const createRow = rowData => (
    <Row
      key={rowData.key}
      isSelectable
      isSelected={selectedKey === rowData.key}
      metaData={{ key: rowData.key }}
      onSelect={handleRowSelection}
    >
      {createCellsForRow(rowData.cells)}
    </Row>
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
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

export default SingleSelectTable;
