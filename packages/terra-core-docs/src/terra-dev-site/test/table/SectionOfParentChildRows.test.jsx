import React from 'react';
import Table from 'terra-table';

const SectionTest = () => (
  <Table
    summaryId="section-table"
    summary="This table displays section grouping."
    dividerStyle="both"
    cellPaddingStyle="standard"
    numberOfColumns={1}
    bodyData={[
      {
        sectionHeader: {
          title: 'Amy section1 default sectionHeader',
          id: 'amy-section1-default-id',
          key: 'amy-section1-default',
        },
        parentRow: {
          key: 'Amy section1 parent row',
          cells: [
            {
              key: 'cell-1',
              children: [
                <div key="cell-1">Amy1 parentRow cell in section with sectionHeader and parentRow</div>,
              ],
            },
            {
              key: 'cell-1.1',
              children: [
                <div key="cell-1.1">Amy1.1 parentRow cell in section with sectionHeader and parentRow</div>,
              ],
            },
          ],
        },
        rows: [
          {
            key: 'row-2',
            cells: [
              {
                key: 'cell-2',
                children: [
                  <div key="cell-2">Amy2 cell in section with sectionHeader and parentRow</div>,
                ],
              },
              {
                key: 'cell-2.2',
                children: [
                  <div key="cell-2.2">Amy2.2 cell in section with sectionHeader and parentRow</div>,
                ],
              },
            ],
          },
          {
            key: 'row-3',
            cells: [
              {
                key: 'cell-3',
                children: [
                  <div key="cell-3">Amy3 cell in section with sectionHeader and parentRow</div>,
                ],
              },
              {
                key: 'cell-3.3',
                children: [
                  <div key="cell-3.3">Amy3.3 cell in section with sectionHeader and parentRow</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        parentRow: {
          key: 'amy-section2-parent-key',
          id: 'amy-section2-parent-id',
          //onToggle: handleSectionToggle,
          //metaData: { key: `parent-key-${timelineRecordItem.recordId}` },
          isCollapsible: true,
          areItsChildRowsCollapsed: false,
          row: {
            key: 'row-4',
            cells: [
              {
                key: 'cell-4',
                children: [
                  <div key="cell-4">Amy4 parentRow cell in section with parentRow</div>,
                ],
              },
              {
                key: 'cell-4.4',
                children: [
                  <div key="cell-4.4">Amy4.4 parentRow cell in section with parentRow</div>,
                ],
              },
            ],
          },
        },
        rows: [
          {
            key: 'row-5',
            cells: [
              {
                key: 'cell-5',
                children: [
                  <div key="cell-5">Amy5 cell in section with parentRow</div>,
                ],
              },
              {
                key: 'cell-5.5',
                children: [
                  <div key="cell-5.5">Amy5.5 cell in section with parentRow</div>,
                ],
              },
            ],
          },
          {
            key: 'row-6',
            cells: [
              {
                key: 'cell-6',
                children: [
                  <div key="cell-6">Amy6 cell in section with parentRow</div>,
                ],
              },
              {
                key: 'cell-6.6',
                children: [
                  <div key="cell-6.6">Amy6.6 cell in section with parentRow</div>,
                ],
              },
            ],
          },
          {
            key: 'row-7',
            cells: [
              {
                key: 'cell-7',
                children: [
                  <div key="cell-7">Amy7 cell in section with parentRow</div>,
                ],
              },
              {
                key: 'cell-7.7',
                children: [
                  <div key="cell-7.7">Amy7.7 cell in section with parentRow</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        sectionHeader: {
          title: 'Amy section3 Collapsed sectionHeader',
          id: 'amy-section3-collapsed-id',
          key: 'amy-section3-collapsed',
          onToggle: () => {},
          isCollapsed: true,
        },
        rows: [
          {
            key: 'row-8',
            cells: [
              {
                key: 'cell-8',
                children: [
                  <div key="cell-8">Amy8 cell in section without sectionHeader or parentRow</div>,
                ],
              },
              {
                key: 'cell-8.9',
                children: [
                  <div key="cell-8.8">Amy8.8 cell in section without sectionHeader or parentRow</div>,
                ],
              },
            ],
          },
        ],
      },
    ]}
  />
);

export default SectionTest;
