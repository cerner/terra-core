import React from 'react';
import Button from 'terra-button';
import Table from 'terra-table';

const buttonCell = <Button type="button" aria-label="Alert" text="Alert" />;

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: <>
        Fleck, Arthur 
        {buttonCell}</> },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: <>
        Wayne, Bruce
         {buttonCell}</> },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
      ],
    },
  ],
};

const TableWithButton = () => (
  <Table
    id="my-table-id"
    overflowColumns={tableData.cols}
    rows={tableData.rows}
    ariaLabel="Table"
  />
);

export default TableWithButton;
