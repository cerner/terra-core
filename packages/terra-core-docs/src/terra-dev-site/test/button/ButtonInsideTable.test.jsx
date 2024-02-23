import React from 'react';
import Table from 'terra-table';
import Button from 'terra-button';

const TableWithButton = () => {
  const buttonCell1 = <Button type="button" id="button1" aria-label="Alert" text="Alert 1" />;
  const buttonCell2 = <Button type="button" id="button2" aria-label="Alert" text="Alert 2" />;

  const tableDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
      { id: 'Column-1', displayName: 'Location' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          {
            content: <>
              Fleck, Arthur
              {buttonCell1}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>,
          },
          { content: '1007-MTN' },
        ],
      },
      {
        id: '2',
        cells: [
          {
            content: (<div>
              Wayne, Bruce
              {buttonCell2}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </div>),
          },
          { content: '1007-MTN-DR' },
        ],
      },
    ],
  };

  const { cols, rows } = tableDataJSON;

  return (
    <>
      <Table
        id="table-button"
        overflowColumns={cols}
        rows={rows}
        hasVisibleColumnHeaders={false}
        ariaLabel="Table with Focusable Elements"
      />
    </>
  );
};

export default TableWithButton;
