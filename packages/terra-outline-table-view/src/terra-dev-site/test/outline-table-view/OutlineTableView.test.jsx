import React from 'react';
import OutlineTableView from 'terra-outline-table-view';

const DefaultTest = () => (
  <OutlineTableView
    aria-multiselectable
    bodyData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              { key: 'cell-0', children: 'John Smith' },
              { key: 'cell-1', children: '123 Adams Drive' },
              { key: 'cell-2', children: '111-222-3333' },
            ],
            toggleAction: {
              metaData: { key: 0 },
              toggleLabel: 'John Smith',
            },
          },
          {
            key: 'row-1',
            cells: [
              { key: 'cell-0', children: 'Jane Smith' },
              { key: 'cell-1', children: '321 Drive Street' },
              { key: 'cell-2', children: '111-222-3333' },
            ],
            toggleAction: {
              metaData: { key: 1 },
              toggleLabel: 'Jane Smith',
            },
          },
        ],
      },
    ]}
    fill
    headerData={{
      selectAllColumn: {
        checkLabel: 'Multi Selection',
      },
      cells: [
        { id: 'header-name', key: 'name', children: 'Name' },
        { id: 'header-address', key: 'address', children: 'Address' },
        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },
      ],
    }}
    numberOfColumns={3}
    numberOfRows={2}
    summary="This is a default table structure"
    summaryId="test-id"
  />
);

export default DefaultTest;
