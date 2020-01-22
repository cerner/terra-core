import React from 'react';
import Table from 'terra-table';

const PaddingTable = () => (
  <React.Fragment>
    <Table
      summaryId="compact-table"
      summary="This table has compact row padding."
      cellPaddingStyle="compact"
      numberOfColumns={1}
      headerData={{
        cells: [
          { id: 'header-name', key: 'name', children: 'Name' },
        ],
      }}
      bodyData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [
                { key: 'cell-0', children: 'John Smith' },
              ],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="standard-table"
      summary="This table has standard row padding."
      cellPaddingStyle="standard"
      numberOfColumns={1}
      headerData={{
        cells: [
          { id: 'header-name', key: 'name', children: 'Name' },
        ],
      }}
      bodyData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [
                { key: 'cell-0', children: 'John Smith' },
              ],
            },
          ],
        },
      ]}
    />
  </React.Fragment>
);

export default PaddingTable;
