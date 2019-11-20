import React, {
  useState,
} from 'react';
import Table from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

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
    {
      key: rowData.key,
      onRowAction: handleRowSelection,
      cells: createCellsForRow(rowData.cells),
      isToggled: selectedKey === rowData.key,
      isVisuallyToggled: selectedKey === rowData.key,
      metaData: { key: rowData.key },
    }
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
      paddingStyle="standard"
      rowStyle="toggle"
      headerData={{
        cells: [
          {
            key: 'cell-0',
            id: 'toggle-0',
            children: ['Column 0'],
          },
          {
            key: 'cell-1',
            id: 'toggle-1',
            children: ['Column 1'],
          },
          {
            key: 'cell-2',
            id: 'toggle-2',
            children: ['Column 2'],
          },
          {
            key: 'cell-3',
            id: 'toggle-3',
            children: ['Column 3'],
          },
        ],
      }}
      sectionData={[
        {
          rows: createRows(mockData),
        },
      ]}
    />
  );
};

export default SingleSelectTable;
