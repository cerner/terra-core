import React from 'react';
import Table from 'terra-table';

const CustomCellWithPadding = () => (
  <Table
    summaryId="example-table"
    summary="This a fixed height table."
    dividerStyle="horizontal"
    numberOfColumns={4}
    rowStyle="disclose"
    cellPaddingStyle="standard"
    headerData={{
      cells: [
        {
          id: 'header-name',
          key: 'name0',
          children: 'Column 0',
        },
        {
          id: 'header-name',
          key: 'name1',
          children: 'Column 1',
        },
        {
          id: 'header-name',
          key: 'name2',
          children: 'Column 2',
        },
        {
          id: 'header-name',
          key: 'name3',
          children: 'Column 3',
        },
      ],
    }}
    bodyData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: 'John Smith',
              },
              {
                key: 'cell-1',
                children: <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed sunt tempora magnam vitae atque nostrum sequi quibusdam veniam deserunt, non itaque tenetur, temporibus repellat repellendus. Commodi non repellat nihil molestiae!</div>,
              },
              {
                key: 'cell-2',
                children: 'John Smith',
              },
              {
                key: 'cell-3',
                children: 'John Smith',
              },
            ],
            discloseAction: {
              discloseLabel: 'Disclose Label',
              discloseCellIndex: 1,
              isDisclosed: false,
            },
          },
          {
            key: 'row-1',
            cells: [
              {
                key: 'cell-0',
                children: 'Jane Smith',
                removeInner: true,
              },
              {
                key: 'cell-1',
                children: 'Jane Smith',
                removeInner: true,
              },
              {
                key: 'cell-2',
                children: 'John Smith',
                removeInner: true,
              },
              {
                key: 'cell-3',
                children: 'John Smith',
                removeInner: true,
              },
            ],
            discloseAction: {
              discloseLabel: 'Disclose Label',
              discloseCellIndex: 1,
              isDisclosed: false,
            },
          },
        ],
      },
    ]}
  />
);

export default CustomCellWithPadding;
