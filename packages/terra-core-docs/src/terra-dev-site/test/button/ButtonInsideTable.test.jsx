import React from 'react';
import Table from 'terra-table';
import Button from 'terra-button';

const TableWithButton = () => {
  const buttonCell = <Button type="button" aria-label="Alert" text="Alert" />;

  const tableDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
      { id: 'Column-1', displayName: 'Location' },
      { id: 'Column-2', displayName: 'Illness Severity' },
      { id: 'Column-3', displayName: 'Visit' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          {
            content: <>
              Fleck, Arthur
              {buttonCell}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>,
          },
          { content: '1007-MTN' },
          { content: 'Unstable' },
          { content: 'Inpatient, 2 months' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Wayne, Bruce' },
          {
            content: (<div>
              Wayne, Bruce
              {buttonCell}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </div>),
          },
          { content: '1007-MTN-DR' },
          { content: 'Stable' },
          { content: 'Outpatient, 2 days' },
        ],
      },
    ],
  };

  const { cols, rows } = tableDataJSON;

  return (
    <>
      <Table
        id="table-focusable-cell"
        overflowColumns={cols}
        rows={rows}
        ariaLabel="Table with Focusable Elements"
      />
    </>
  );
};

export default TableWithButton;
