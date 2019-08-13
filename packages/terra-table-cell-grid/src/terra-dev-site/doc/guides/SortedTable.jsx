import React, {
  useState,
} from 'react';
import Table, {
  CellGrid, Cell, HeaderCell,
} from 'terra-table-cell-grid'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-sort';

const columns = ['column-0', 'column-1', 'column-2'];

const createCell = cell => <Cell isPadded key={cell.key}>{cell.title}</Cell>;

const createCellsForCellGrid = cells => cells.map(cell => createCell(cell));

const createCellGrid = itemData => <CellGrid key={itemData.key}>{createCellsForCellGrid(itemData.cells)}</CellGrid>;

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

  const createCellGrids = (data) => {
    const sortedData = sortData(data, sortColumn);
    return sortedData.map(childItem => createCellGrid(childItem));
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
      {createCellGrids(mockData)}
    </Table>
  );
};

export default SortedTable;
