import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const MultiSelectTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleRowSelection = (event, metaData) => {
    event.preventDefault();
    setSelectedKeys(Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key));
  };

  const createRow = rowData => (
    {
      key: rowData.key,
      isDisabled: !Utils.shouldBeMultiSelectable(maxSectionCount, selectedKeys, rowData.key),
      isToggled: selectedKeys.indexOf(rowData.key) >= 0,
      isVisuallyToggled: selectedKeys.indexOf(rowData.key) >= 0,
      metaData: { key: rowData.key },
      onRowAction: handleRowSelection,
      cells: createCellsForRow(rowData.cells),
    }
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
      aria-multiselectable
      rowStyle="toggle"
      paddingStyle="standard"
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
        ]
      }}
      sectionData={[
        {
          rows: createRows(mockData),
        },
      ]}
    />
  );
};

export default MultiSelectTable;
