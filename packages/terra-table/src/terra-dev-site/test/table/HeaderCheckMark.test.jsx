import React from 'react';
import Table from 'terra-table';

const HeaderCheckMarkTest = () => (
  <React.Fragment>
    <Table
      summaryId="example-check-cell"
      summary="This table displaying a default check column."
      rowStyle="toggle"
      checkStyle="readOnly"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title' },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Default' }],
      }}
    />
    <Table
      summaryId="empty-check-cell"
      summary="This table displaying a selectable unchecked column."
      rowStyle="none"
      checkStyle="toggle"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'empty' },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Unchecked' }],
      }}
    />
    <Table
      summaryId="checked-check-cell"
      summary="This table displaying a selectable checked column."
      rowStyle="none"
      checkStyle="toggle"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'checked' },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Checked' }],
      }}
    />
    <Table
      summaryId="indeterminate-check-cell"
      summary="This table displaying a selectable indeterminate column."
      rowStyle="none"
      checkStyle="toggle"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkStatus: 'indeterminate' },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Selectable Indeterminate' }],
      }}
    />
    <Table
      summaryId="disabled-check-cell"
      summary="This table displaying a disabled check column."
      rowStyle="none"
      checkStyle="toggle"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, isDisabled: true },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Disabled' }],
      }}
    />
    <Table
      summaryId="alignment-check-cell"
      summary="This table displaying a vertically aligned check column."
      rowStyle="none"
      checkStyle="toggle"
      numberOfColumns={1}
      headerData={{
        selectAllColumn: { checkLabel: 'Column Example Title', onCheckAction: () => {}, checkAlignment: '1rem' },
        cells: [{ id: 'column-0', key: 'key-0', children: 'Vertical Alignment 1rem' }],
      }}
    />
  </React.Fragment>
);

export default HeaderCheckMarkTest;
