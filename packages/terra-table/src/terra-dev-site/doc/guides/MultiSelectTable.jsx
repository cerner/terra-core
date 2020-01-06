import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table';
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => ({ key: cell.key, children: cell.title });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const MultiSelectTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const handleRowToggle = (event, metaData) => {
    event.preventDefault();
    setSelectedKeys(Utils.toggleArrayValue(selectedKeys, metaData.key));
  };

  const createRow = rowData => (
    {
      key: rowData.key,
      cells: createCellsForRow(rowData.cells),
      isDisabled: !Utils.canToggleArrayValue(maxSectionCount, selectedKeys, rowData.key),
      toggleAction: {
        metaData: { key: rowData.key },
        onToggle: handleRowToggle,
        isToggled: selectedKeys.indexOf(rowData.key) >= 0,
        toggleLabel: rowData.toggleText,
      },
    }
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  return (
    <Table
      summaryId="example-multi-select"
      summary="This table shows an implementation of multiple row selection."
      aria-multiselectable
      rowStyle="toggle"
      numberOfColumns={4}
      cellPaddingStyle="standard"
      headerData={{
        selectAllColumn: {
          checkLabel: 'Multi Selection',
        },
        cells: [
          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },
          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },
          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },
          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },
        ],
      }}
      bodyData={[
        {
          rows: createRows(mockData),
        },
      ]}
    />
  );
};

export default MultiSelectTable;
