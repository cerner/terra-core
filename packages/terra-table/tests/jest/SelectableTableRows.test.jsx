import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.Cell className="NAME" content="John Smith" key="NAME" />;
const cellData2 = <Table.Cell className="ADDRESS" content="123 Adams Drive" key="ADDRESS" />;
const cellData3 = <Table.Cell className="PHONE_NUMBER" content="111-222-3333" key="PHONE_NUMBER" />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key="PERSON_0" className="PERSON_0" isSelectable>{rowData}</Table.Row>;
const row2 = <Table.Row key="PERSON_1" className="PERSON_1" isSelected isSelectable>{rowData}</Table.Row>;
const rows = [row1, row2];

it('should update the liveregion on a selected row when one is provided', () => {
  const defaultTableRows = mountWithIntl(<Table><Table.SelectableTableRows selectedIndexes={[0]} id="selectable-rows">{rows}</Table.SelectableTableRows></Table>);

  defaultTableRows.find('.PERSON_0').at(0).props().onClick({ preventDefault: () => {} });
  expect(defaultTableRows).toMatchSnapshot();
  expect(defaultTableRows.find('#selectable-rows').at(0).props().liveRegion.current.innerText).toEqual('Terra.table.rowUnselected');

  defaultTableRows.find('.PERSON_1').at(0).props().onClick({ preventDefault: () => {} });
  expect(defaultTableRows).toMatchSnapshot();
  expect(defaultTableRows.find('#selectable-rows').at(0).props().liveRegion.current.innerText).toEqual('Terra.table.rowSelected');
});
