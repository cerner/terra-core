import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';

import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell content="John Smith" key="NAME" />;
const cellData2 = <Table.Cell content="123 Adams Drive" key="ADDRESS" />;
const cellData3 = <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key="PERSON_0">{rowData}</Table.Row>;
const row2 = <Table.Row key="PERSON_1">{rowData}</Table.Row>;
const rows = [row1, row2];
const headerData1 = <Table.HeaderCell content="Name" key="NAME" />;
const headerData2 = <Table.HeaderCell content="Address" key="ADDRESS" />;
const headerData3 = <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" />;
const header = [headerData1, headerData2, headerData3];

// Snapshot test
it('should render a default table', () => {
  const defaultTable = (
    <Table>
      <Table.Header>{header}</Table.Header>
      <Table.Rows>{rows}</Table.Rows>
    </Table>
  );
  const table = shallowWithIntl(defaultTable);
  expect(table).toMatchSnapshot();
});

it('should render a table without zebra stripes', () => {
  const defaultTable = (
    <Table isStriped={false}>
      <Table.Header>{header}</Table.Header>
      <Table.Rows>{rows}</Table.Rows>
    </Table>
  );
  const table = shallowWithIntl(defaultTable);
  expect(table).toMatchSnapshot();
});

it('should render a table without padding', () => {
  const defaultTable = (
    <Table isPadded={false}>
      <Table.Header>{header}</Table.Header>
      <Table.Rows>{rows}</Table.Rows>
    </Table>
  );
  const table = shallowWithIntl(defaultTable);
  expect(table).toMatchSnapshot();
});
