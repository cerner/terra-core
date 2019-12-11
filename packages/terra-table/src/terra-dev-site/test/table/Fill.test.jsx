import React from 'react';
import Table from 'terra-table';
import Fixed from '../common/Fixed';

const FixedTest = () => (
  <Fixed>
    <Table
      summaryId="example-table"
      summary="This a fixed height table."
      fill
      numberOfColumns={1}
      headerData={{
        cells: [
          {
            id: 'header-name',
            key: 'name',
            children: 'Name',
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
                  children: 'John Smith',
                },
              ],
            },
            {
              key: 'row-1',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Jane Smith',
                },
              ],
            },
          ],
        },
      ]}
    />
  </Fixed>
);

export default FixedTest;
