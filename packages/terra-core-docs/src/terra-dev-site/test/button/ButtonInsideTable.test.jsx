import React from 'react';
import Table from 'terra-table';
import Button from 'terra-button';

const TableWithButton = () => {
  const buttonCell1 = <Button type="button" id="button1" isCompact aria-label="Alert" text="Alert 1" />;
  const buttonCell2 = <Button type="button" id="button2" isCompact aria-label="Alert" text="Alert 2" />;

  const tableDataJSON = {
    cols: [
      { id: 'Column-0', displayName: 'Patient' },
    ],
    rows: [
      {
        id: '1',
        cells: [
          {
            content: <>
              {buttonCell1}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </>,
          },
        ],
      },
      {
        id: '2',
        cells: [
          {
            content: (<div>
              {buttonCell2}
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </div>),
          },
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
