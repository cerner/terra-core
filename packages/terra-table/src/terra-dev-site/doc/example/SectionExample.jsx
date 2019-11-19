import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table, { Row, Cell, Section } from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const TableSectionExample = () => (
  <Table
    paddingStyle="standard"
    columnData={{
      widths:[],
    }}
    sectionData={[
      {
        sectionHeader: {
          title: 'Default Section',
          id: 'default-id',
          key: 'default',
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
        ]
      },
      {
        sectionHeader: {
          title: 'Collapsed Section',
          id: 'collapsed-id',
          key: 'collapsed',
          isCollapsible: true,
          isCollapsed: true,
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
        ]
      }
    ]}
  />
  //   <Section title="Default Section">
  //     <Row>
  //       <Cell key="cell-0">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-1">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-2">
  //         Lorem ipsum dolor
  //       </Cell>
  //     </Row>
  //   </Section>
  //   <Section isCollapsible title="Collapsible Section">
  //     <Row>
  //       <Cell key="cell-0">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-1">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-2">
  //         Lorem ipsum dolor
  //       </Cell>
  //     </Row>
  //   </Section>
  //   <Section isCollapsible isCollapsed title="Collapsed Section">
  //     <Row>
  //       <Cell key="cell-0">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-1">
  //         Lorem ipsum dolor
  //       </Cell>
  //       <Cell key="cell-2">
  //         Lorem ipsum dolor
  //       </Cell>
  //     </Row>
  //   </Section>
  // </Table>
);

export default TableSectionExample;
