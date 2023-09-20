import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import { IntlProvider } from 'react-intl';
import ColumnContext from '../../src/utils/ColumnContext';
import Cell from '../../src/subcomponents/Cell';

describe('Cell', () => {
  it('verifies that only a row header cell (<th>) is created when isRowHeader prop is true', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          columnIndex={2}
          key="key"
          isRowHeader
          height="50px"
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    expect(wrapper.find('th')).toHaveLength(1); // Th when row header.
    expect(wrapper.find('td')).toHaveLength(0); // There should be no th since this is row header.
    expect(wrapper).toMatchSnapshot();

    const cellContent = wrapper.find('th').find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
  });

  it('verifies that only a regular cell(<td>) is created when isRowHeader prop is false', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          columnIndex={2}
          key="key"
          isTabStop={false}
          isRowHeader={false}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const normalCell = wrapper.find('td');
    expect(normalCell).toHaveLength(1); // Th when non row header.
    expect(wrapper.find('th')).toHaveLength(0); // There should be no td since this is a row header.

    const cellContent = normalCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the cell rendered is marked blank when the cell content is empty', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowIndex={1}
          columnIndex={2}
          key="key"
        />
      </IntlProvider>,
    ).dive().dive();

    const blankCell = wrapper.find('td.blank');
    expect(blankCell).toHaveLength(1);

    const cellContent = blankCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.blank');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a cell has the correct styles and no content when isMasked prop is true', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isMasked
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.maskedCell');
    expect(cellContent).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a pinned cell', () => {
    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ pinnedColumnOffsets: [0] }}>
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={0}
          key="key"
          isRowHeader
          height="50px"
        >
          Pinned cell data
        </Cell>
      </ColumnContext.Provider>,
    );

    expect(wrapper.find('.pinned')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});

