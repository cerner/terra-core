import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: [cell.title] });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const CheckMarkTable = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const rowCount = mockData.length; // This value needs to exclude or account for section headers

  const handleMarkSelection = (event, metaData) => {
    event.preventDefault();

    const newSelection = Utils.updatedMultiSelectedKeys(selectedKeys, metaData.key);
    const isMax = newSelection.length === rowCount;
    setAllSelected(allSelected ? !isMax : isMax);
    setSelectedKeys(isMax ? [] : newSelection);
  };

  const handleHeaderMarkSelection = () => {
    setAllSelected(!!selectedKeys.length || !allSelected);
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
    {
      key: rowData.key,
      onCheckAction: handleMarkSelection,
      metaData: { key: rowData.key },
      isToggled: getIsRowSelected(rowData.key),
      cells: createCellsForRow(rowData.cells),
      toggleLabel: rowData.toggleText,
      discloseLabel: rowData.discloseText,
      primaryIndex: rowData.primaryIndex,
    }
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  let status = 'empty';
  if (allSelected) {
    status = 'checked';
  } else if (!!selectedKeys.length) {
    status = 'indeterminate';
  }
  return (
    <Table
      id="check-table"
      summary="This table has rows that can be batch selected with the checkbox or diclosed for further details."
      paddingStyle="standard"
      rowStyle="disclose"
      checkStyle="toggle"
      headerData={{
        selectionColumnData: {
          status,
          label: 'Batch Selection',
          onToggle: handleHeaderMarkSelection,
        },
        cells: [
          { key: 'cell-0', id: 'toggle-0', children: ['Column 0'] },
          { key: 'cell-1', id: 'toggle-1', children: ['Column 1'] },
          { key: 'cell-2', id: 'toggle-2', children: ['Column 2'] },
          { key: 'cell-3', id: 'toggle-3', children: ['Column 3'] },
        ],
      }}
      sectionData={[{
        rows: createRows(mockData),
      }]}
    />
  );
};

export default CheckMarkTable;
