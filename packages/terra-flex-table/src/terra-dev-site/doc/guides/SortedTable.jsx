import React, {
  useState,
} from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-sort';

const columns = ['column-0', 'column-1', 'column-2'];

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = itemData => <Row key={itemData.key}>{createCellsForRow(itemData.cells)}</Row>;

const sortData = (data, sortColumn) => {
  if (!sortColumn) {
    return data;
  }

  const dataCopy = Object.assign([], data);
  dataCopy.sort((a, b) => {
    const x = a.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
    const y = b.cells[columns.indexOf(sortColumn.key)].title.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });

  return sortColumn.direction === 'asc' ? dataCopy : dataCopy.reverse();
};

const SortedTable = () => {
  const [sortColumn, setSortColumn] = useState(null);

  const handleSortClick = (event, metaData) => {
    event.preventDefault();
    if (!sortColumn || sortColumn.key !== metaData.key) {
      setSortColumn({ key: metaData.key, direction: 'asc' });
    } else if (sortColumn.direction === 'asc') {
      setSortColumn({ key: metaData.key, direction: 'desc' });
    } else {
      setSortColumn(null);
    }
  };

  const createTableRows = (data) => {
    const sortedData = sortData(data, sortColumn);
    return sortedData.map(childItem => createRow(childItem));
  };

  const createHeaderCell = (key, title) => {
    let sort;
    if (sortColumn && sortColumn.key === key) {
      sort = sortColumn.direction;
    }
    return (
      <HeaderCell
        key={key}
        metaData={{ key }}
        onSelect={handleSortClick}
        sort={sort}
        isSelectable
        isPadded
      >
        {title}
      </HeaderCell>
    );
  };

  return (
    <Table
      paddingStyle="standard"
      headerCells={[
        createHeaderCell('column-0', 'Breakfast'),
        createHeaderCell('column-1', 'Animals'),
        createHeaderCell('column-2', 'Flatware'),
      ]}
    >
      {createTableRows(mockData)}
    </Table>
  );
};

export default SortedTable;
