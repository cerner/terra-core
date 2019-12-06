import React from 'react';
import Table from 'terra-table';

const CheckMarkCellExample = () => (
  <React.Fragment>
    <Table
      summaryId="example-default"
      summary="This table shows a default cell"
      rowStyle="toggle"
      checkStyle="none"
      headerData={{
        cells: [{ id: 'test1', key: 'test1', children: ['test'] }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              checkAlignment: 2,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-alignment"
      summary="This table shows a cell alignment"
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              checkAlignment: 2,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-disclose"
      summary="This table shows a disclosure cell"
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-checkstyle"
      summary="This table shows a read only check cell"
      rowStyle="toggle"
      checkStyle="readOnly"
      headerData={{
        cells: [{ id: 'test2', key: 'test1', children: ['test'] }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-toggle"
      summary="This table shows a toggled check cell"
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-toggle-true"
      summary="This table shows a toggled check cell that is selected."
      rowStyle="toggle"
      checkStyle="readOnly"
      headerData={{
        cells: [{ id: 'test3', key: 'test1', children: 'test' }],
      }}
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-disabled-toggle"
      summary="This table shows a disclosure toggled check cell that is disabled."
      rowStyle="disclose"
      checkStyle="toggle"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isDisabled: true,
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
    <Table
      summaryId="example-toggle-readonly"
      summary="This table shows a read only toggled disabled check cell"
      rowStyle="toggle"
      checkStyle="readOnly"
      sectionData={[
        {
          rows: [
            {
              key: 'row-0',
              isDisabled: true,
              isToggled: true,
              cells: [{
                key: 'key-0',
                children: 'test',
              }],
            },
          ],
        },
      ]}
    />
  </React.Fragment>
);

export default CheckMarkCellExample;
