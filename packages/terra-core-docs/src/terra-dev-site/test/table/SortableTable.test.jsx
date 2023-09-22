import React, { useState } from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const sortableTableData = { ...tableData };

sortableTableData.cols[0].isSelectable = true;
sortableTableData.cols[0].sortIndicator = 'ascending';

sortableTableData.cols[1].isSelectable = true;
sortableTableData.cols[1].sortIndicator = 'ascending';

const SortableTable = () => {
  const [tableColumns, setTableColumns] = useState(sortableTableData.cols);
  const [tableRows, setTableRows] = useState(sortableTableData.rows);
  const handleColumnSelect = (columnId) => {
    const newColumns = [...tableColumns].map((col) => {
      const newCol = { ...col };
      if (columnId === col.id) {
        newCol.sortIndicator = col.sortIndicator === 'ascending' ? 'descending' : 'ascending';
      } else if (newCol.sortIndicator) {
        newCol.sortIndicator = 'ascending';
      }
      return newCol;
    });

    const newRows = [...tableRows];

    const columnIndex = newColumns.findIndex(col => col.id === columnId);
    if (columnIndex > -1) {
      const { sortIndicator } = newColumns[columnIndex];
      newRows.sort((rowA, rowB) => {
        const firstRowContent = rowA.cells[columnIndex].content || '';
        const secondRowContent = rowB.cells[columnIndex].content || '';

        if (sortIndicator === 'ascending') {
          return firstRowContent.localeCompare(secondRowContent);
        }
        return secondRowContent.localeCompare(firstRowContent);
      });
    }

    setTableColumns(newColumns);
    setTableRows(newRows);
  };

  return (
    <React.Fragment>
      <Table
        id="my-table-id"
        overflowColumns={tableColumns}
        rows={tableRows}
        onColumnSelect={handleColumnSelect}
      />
    </React.Fragment>
  );
};

export default SortableTable;
