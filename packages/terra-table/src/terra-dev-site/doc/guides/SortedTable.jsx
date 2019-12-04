import React, {
  useState,
} from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-sort';

const columnKeys = ['column-0', 'column-1', 'column-2'];

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = rowData => ({ key: rowData.key, cells: createCellsForRow(rowData.cells) });

const sortData = (data, sortColumn) => {
  if (!sortColumn) {
    return data;
  }

  const dataCopy = Object.assign([], data);
  dataCopy.sort((a, b) => {
    const x = a.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();
    const y = b.cells[columnKeys.indexOf(sortColumn.key)].title.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });

  return sortColumn.sortDesc ? dataCopy.reverse() : dataCopy;
};

const SortedTable = () => {
  const [sortColumn, setSortColumn] = useState({ key: columnKeys[0], sortDesc: false });

  const handleSortClick = (event, metaData) => {
    event.preventDefault();
    if (sortColumn.key !== metaData.key) {
      setSortColumn({ key: metaData.key, sortDesc: false });
    } else {
      setSortColumn({ key: metaData.key, sortDesc: !sortColumn.sortDesc });
    }
  };

  const createRows = (data) => {
    const sortedData = sortData(data, sortColumn);
    return sortedData.map(childItem => createRow(childItem));
  };

  const createHeaderCell = (key, title) => (
    {
      key,
      id: `header-${key}`,
      metaData: { key },
      onSortAction: handleSortClick,
      isSortDesc: sortColumn.sortDesc,
      isSortActive: sortColumn.key === key,
      children: [title],
    }
  );

  return (
    <Table
      paddingStyle="standard"
      headerData={{
        cells: [
          createHeaderCell(columnKeys[0], 'Breakfast'),
          createHeaderCell(columnKeys[1], 'Animals'),
          createHeaderCell(columnKeys[2], 'Flatware'),
        ],
      }}
      sectionData={[{
        rows: createRows(mockData),
      }]}
    />
  );
};

export default SortedTable;
