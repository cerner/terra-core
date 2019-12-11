import React from 'react';
import Table from 'terra-table';

const HeaderFooterTest = () => (
  <Table
    summaryId="custom-table"
    summary="This table shows custom header and footer nodes."
    headerNode={<p>Header</p>}
    footerNode={<p>Footer</p>}
    numberOfColumns={1}
    headerData={{
      cells: [
        {
          id: 'header-name',
          key: 'name',
          children: ['Name'],
        },
      ],
    }}
    sectionData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'John Smith',
                ],
              },
            ],
          },
        ],
      },
    ]}
  />
);

export default HeaderFooterTest;
