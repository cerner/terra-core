import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Table from 'terra-table';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const RowExample = () => (
  <React.Fragment> 
    <Table
      paddingStyle="standard"
      sectionData={[
        {
          rows: [{
              key: 'default_row"',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Default Row',
                  ],
                },
              ],
            },
            {
              key: 'striped_row',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Striped Row',
                  ],
                },
              ],
            },
          ],
        }
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      rowStyle="disclose"
      hasChevrons
      sectionData={[
        {
          rows: [
            {
              key: 'chevron_row',
              discloseLabel: 'test title',
              primaryIndex: 0,
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Chevron Row',
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      rowStyle="toggle"
      sectionData={[
        {
          rows: [{
            key: 'toggle_row',
            cells: [{
              key: 'cell-0',
              children: [
                'Toggle Row',
              ],
            }],
          },
          {
            key: 'toggled_row',
            isToggled: true,
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Toggled Row',
                ],
              },
            ],
          }],
        },
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [{
            key: 'check_row',
            cells: [{
              key: 'cell-0',
              children: [
                'Check Row',
              ],
            }],
          },
          {
            key: 'checked_row',
            isToggled: true,
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Toggled Check Row',
                ],
              },
            ],
          }],
        },
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [{ 
            key: 'selection_checkmark',
            cells: [{
                key: 'cell-0',
                children: [
                  'Toggle Style Checkmark',
                ],
              }],
            },
            {
              key: 'selection_chevron',
              isToggled: true,
              cells: [{
                  key: 'cell-0',
                  children: [
                    'Toggled Style Checkmark',
                  ],
              }],
          }],
        },
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      dividerStyle="vertical"
      sectionData={[
        {
          rows: [
            {
              key: 'divider_vertical-0',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
              ],
            },
            {
              key: 'divider_vertical-1',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    'Vertical Divider Row',
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      dividerStyle="horizontal"
      sectionData={[
      {
        rows: [
          {
            key: 'divider_horizontal-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Horizontal Divider Row',
                ],
              },
              {
                key: 'cell-1',
                children: [
                  'Horizontal Divider Row',
                ],
              },
              {
                key: 'cell-2',
                children: [
                  'Horizontal Divider Row',
                ],
              },
            ]
          },
          {
            key: 'divider_horizontal-1',
            cells: [
              {
                key: 'cell-0',
                children: [
                  'Horizontal Divider Row',
                ],
              },
              {
                key: 'cell-1',
                children: [
                  'Horizontal Divider Row',
                ],
              },
              {
                key: 'cell-2',
                children: [
                  'Horizontal Divider Row',
                ],
              },
            ]
          },
        ]},
      ]}
    />
    <br />
    <Table
      paddingStyle="standard"
      dividerStyle="both"
      sectionData={[
        {
          rows: [
            {
              key: 'divider_both-0',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Both Divider Row',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    'Both Divider Row',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    'Both Divider Row',
                  ],
                },
              ],
            },
            {
              key: 'divider_both-1',
              cells: [
                {
                  key: 'cell-0',
                  children: [
                    'Both Divider Row',
                  ],
                },
                {
                  key: 'cell-1',
                  children: [
                    'Both Divider Row',
                  ],
                },
                {
                  key: 'cell-2',
                  children: [
                    'Both Divider Row',
                  ],
                },
              ],
            },
          ],
        },
      ]}
    />
  </React.Fragment>
);

export default RowExample;
