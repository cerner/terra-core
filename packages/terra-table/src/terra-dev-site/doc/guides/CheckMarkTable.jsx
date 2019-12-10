import React, {
  useState,
} from 'react';
import Table, {
  Utils,
} from 'terra-table';
import mockData from './mock-data/mock-select';

const createCell = cell => ({ key: cell.key, children: cell.title });

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const CheckMarkTable = () => {
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const rowCount = mockData.length; // This value needs to exclude or account for section headers

  const handleRowCheckAction = (event, metaData) => {
    event.preventDefault();

    const newKeys = Utils.toggleArrayValue(checkedKeys, metaData.key);
    const isMax = newKeys.length === rowCount;
    setAllChecked(allChecked ? !isMax : isMax);
    setCheckedKeys(isMax ? [] : newKeys);
  };

  const handleHeaderCheckAction = () => {
    setAllChecked(!!checkedKeys.length || !allChecked);
    setCheckedKeys([]);
  };

  const getIsRowChecked = (key) => {
    if (checkedKeys.length) {
      const isPresent = checkedKeys.indexOf(key) >= 0;
      return allChecked ? !isPresent : isPresent;
    }
    return allChecked;
  };

  const createRow = rowData => (
    {
      key: rowData.key,
      cells: createCellsForRow(rowData.cells),
      toggleAction: {
        metaData: { key: rowData.key },
        onToggle: handleRowCheckAction,
        toggleLabel: rowData.toggleText,
        isToggled: getIsRowChecked(rowData.key),
      },
      discloseAction: {
        discloseLabel: rowData.discloseText,
        discloseCellIndex: rowData.primaryIndex,
      },
    }
  );

  const createRows = data => data.map(childItem => createRow(childItem));

  let status = 'empty';
  if (checkedKeys.length) {
    status = 'indeterminate';
  } else if (allChecked) {
    status = 'checked';
  }

  return (
    <Table
      summaryId="check-table"
      summary="This table has rows that can be batch selected with the checkbox or disclosed for further details."
      paddingStyle="standard"
      rowStyle="disclose"
      checkStyle="toggle"
      headerData={{
        selectAllColumn: {
          checkStatus: status,
          checkLabel: 'Batch Selection',
          onCheckAction: handleHeaderCheckAction,
        },
        cells: [
          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },
          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },
          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },
          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },
        ],
      }}
      sectionData={[{
        rows: createRows(mockData),
      }]}
    />
  );
};

export default CheckMarkTable;
