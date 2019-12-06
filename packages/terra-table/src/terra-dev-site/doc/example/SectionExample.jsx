import React from 'react';
import Table from 'terra-table';

const TableSectionExample = () => (
  <Table
    summaryId="section-table"
    summary="This table displays section grouping."
    paddingStyle="standard"
    sectionData={[
      {
        sectionHeader: {
          title: 'Default Section',
          id: 'default-id',
          key: 'default',
          numberOfColumns: 3,
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-1',
                children: [
                  <div key="cell-1">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-2',
                children: [
                  <div key="child">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        sectionHeader: {
          title: 'Collapsible Section',
          id: 'collapsible-id',
          key: 'collapsible',
          isCollapsible: true,
          numberOfColumns: 3,
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-1',
                children: [
                  <div key="cell-1">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-2',
                children: [
                  <div key="child">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        sectionHeader: {
          title: 'Collapsed Section',
          id: 'collapsed-id',
          key: 'collapsed',
          isCollapsed: true,
          numberOfColumns: 3,
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-1',
                children: [
                  <div key="cell-1">Lorem ipsum dolor</div>,
                ],
              },
              {
                key: 'cell-2',
                children: [
                  <div key="child">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
    ]}
  />
);

export default TableSectionExample;
