import React from 'react';
import Table from 'terra-table';

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient' },
    { id: 'Column-1', displayName: 'Location' },
    { id: 'Column-2', displayName: 'Illness Severity' },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
    { id: 'Column-6', displayName: 'Generic Order Counts' },
    { id: 'Column-7', displayName: 'Patient Age' },
    { id: 'Column-8', displayName: 'Medication History' },
    { id: 'Column-9', displayName: 'My Relationship' },
    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: 'Unstable' },
        { content: 'Inpatient, 2 months' },
        { content: '' },
        { content: 'Quinzell, Harleen' },
        { content: '' },
        { isMasked: true },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
        { content: 'Phytochemicals' },
        { content: 'Grayson, Richard' },
        { content: '' },
        { content: '' },
        { isMasked: true },
        { content: 'Admitting Physician' },
        { content: '', isSelectable: false },
      ],
    },
  ],
};

const NewTableExample = () => (
  <React.Fragment>
    <Table
      overflowColumns={tableData.cols}
      rows={tableData.rows}
    />

  </React.Fragment>
);

export default NewTableExample;
