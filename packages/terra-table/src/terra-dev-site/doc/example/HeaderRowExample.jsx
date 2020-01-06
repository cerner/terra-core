import React from 'react';
import Table from 'terra-table';

const HeaderRowExample = () => (
  <React.Fragment>
    <Table
      summaryId="default-header-table"
      summary="This table displays the default layout of table header."
      numberOfColumns={2}
      cellPaddingStyle="standard"
      headerData={{
        cells: [
          { id: 'header-key-0', key: 'key-0', children: 'Default Header' },
          { id: 'header-key-1', key: 'key-1', children: 'Default Header' },
        ],
      }}
    />
    <Table
      summaryId="chevron-header-table"
      summary="This table displays the chevron layout of table header."
      numberOfColumns={2}
      cellPaddingStyle="standard"
      rowStyle="disclose"
      hasChevrons
      headerData={{
        cells: [
          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Chevron' },
          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Chevron' },
        ],
      }}
    />
    <Table
      summaryId="check-header-table"
      summary="This table displays the checkmark layout of table header."
      numberOfColumns={2}
      cellPaddingStyle="standard"
      checkStyle="toggle"
      headerData={{
        selectAllColumn: {
          checkLabel: 'Column Title',
        },
        cells: [
          { id: 'header-key-0', key: 'key-0', children: 'Selection Style Checkmark' },
          { id: 'header-key-1', key: 'key-1', children: 'Selection Style Checkmark' },
        ],
      }}
    />
  </React.Fragment>
);

export default HeaderRowExample;
