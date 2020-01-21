import React from 'react';
import Table from 'terra-table';

const RowExample = () => (
  <React.Fragment>
    <Table
      summaryId="default-row-table"
      summary="This table displays default rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      bodyData={[
        {
          rows: [
            {
              key: 'default_row"',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Default Row',
                },
              ],
            },
            {
              key: 'striped_row',
              isStriped: true,
              cells: [
                {
                  key: 'cell-0',
                  children: 'Striped Row',
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      summaryId="chevron-row-table"
      summary="This table displays chevron rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      rowStyle="disclose"
      hasChevrons
      bodyData={[
        {
          rows: [
            {
              key: 'chevron_row',
              discloseAction: {
                discloseLabel: 'test title',
                discloseCellIndex: 0,
              },
              cells: [
                {
                  key: 'cell-0',
                  children: 'Chevron Row',
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      summaryId="toggle-row-table"
      summary="This table displays toggle rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      rowStyle="toggle"
      bodyData={[
        {
          rows: [{
            key: 'toggle_row-0',
            cells: [{
              key: 'cell-0',
              children: 'Toggle Row',
            }],
            toggleAction: {
              toggleLabel: 'toggle text',
            },
          },
          {
            key: 'toggled_row-1',
            cells: [
              {
                key: 'cell-0',
                children: 'Toggled Row',
              },
            ],
            toggleAction: {
              toggleLabel: 'toggle text',
              isToggled: true,
            },
          }],
        },
      ]}
    />
    <br />
    <Table
      summaryId="check-row-table"
      summary="This table displays check rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      rowStyle="toggle"
      checkStyle="icon"
      bodyData={[
        {
          rows: [{
            key: 'check_row-0',
            cells: [{
              key: 'cell-0',
              children: 'Check Row',
            }],
            toggleAction: {
              toggleLabel: 'toggle text',
            },
          },
          {
            key: 'checked_row-1',
            cells: [
              {
                key: 'cell-0',
                children: 'Toggled Check Row',
              },
            ],
            toggleAction: {
              toggleLabel: 'toggle text',
              isToggled: true,
            },
          }],
        },
      ]}
    />
    <br />
    <Table
      summaryId="checkmark-row-table"
      summary="This table displays checkmark rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      checkStyle="toggle"
      bodyData={[
        {
          rows: [
            {
              key: 'selection_checkmark',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Toggle Style Checkmark',
                },
              ],
              toggleAction: {
                toggleLabel: 'toggle text',
              },
            },
            {
              key: 'selection_chevron',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Toggled Style Checkmark',
                },
              ],
              toggleAction: {
                toggleLabel: 'toggle text',
                isToggled: true,
              },
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      summaryId="vertical-row-table"
      summary="This table displays vertical divider rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      dividerStyle="vertical"
      bodyData={[
        {
          rows: [
            {
              key: 'divider_vertical-0',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Vertical Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Vertical Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Vertical Divider Row',
                },
              ],
            },
            {
              key: 'divider_vertical-1',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Vertical Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Vertical Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Vertical Divider Row',
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      summaryId="horizontal-row-table"
      summary="This table displays horizontal divider rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      dividerStyle="horizontal"
      bodyData={[
        {
          rows: [
            {
              key: 'divider_horizontal-0',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Horizontal Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Horizontal Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Horizontal Divider Row',
                },
              ],
            },
            {
              key: 'divider_horizontal-1',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Horizontal Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Horizontal Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Horizontal Divider Row',
                },
              ],
            },
          ],
        },
      ]}
    />
    <br />
    <Table
      summaryId="both-row-table"
      summary="This table displays both divider rows."
      numberOfColumns={1}
      cellPaddingStyle="standard"
      dividerStyle="both"
      bodyData={[
        {
          rows: [
            {
              key: 'divider_both-0',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Both Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Both Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Both Divider Row',
                },
              ],
            },
            {
              key: 'divider_both-1',
              cells: [
                {
                  key: 'cell-0',
                  children: 'Both Divider Row',
                },
                {
                  key: 'cell-1',
                  children: 'Both Divider Row',
                },
                {
                  key: 'cell-2',
                  children: 'Both Divider Row',
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
