import React from 'react';
import { IntlProvider } from 'react-intl';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';

import Cell from '../../src/subcomponents/Cell';
import ColumnContext from '../../src/utils/ColumnContext';

describe('Cell', () => {
  it('verifies that only a row header cell (<th>) is created when isRowHeader prop is true', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isSelected={false}
          isRowHeader
          onCellSelect={jest.fn}
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
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isSelected={false}
          isRowHeader={false}
          onCellSelect={jest.fn}
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

  it('verifies that the cell rendered is marked selectable when isSelectable prop is true', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isSelectable
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const selectableCell = wrapper.find('td.selectable');
    expect(selectableCell).toHaveLength(1); // Cell should have been styled selectable.

    const cellContent = selectableCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the cell rendered is marked blank when the cell content is empty', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          key="key"
          onCellSelect={jest.fn}
        />
      </IntlProvider>,
    ).dive().dive();

    const blankCell = wrapper.find('td.blank');
    expect(blankCell).toHaveLength(1);

    const cellContent = blankCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.blank');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a selected cell has the correct styles when isSelected prop is true', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isSelected
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const selectedCell = wrapper.find('td.selected');
    expect(selectedCell).toHaveLength(1); // Cell should have been styled selected.

    expect(wrapper.find('td').prop('aria-selected')).toBe(undefined);
    expect(wrapper.find('td').prop('aria-label')).toBe('Some Label Here');

    const cellContent = selectedCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');

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
          onCellSelect={jest.fn}
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

  it('verifies mask takes precedence when cell is masked, selectable and selected', () => {
    const wrapper = shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          key="key"
          isSelected
          isMasked
          isSelectable
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.maskedCell');

    // Verify other styles not applied.
    expect(wrapper.find('td.selected')).toHaveLength(0); // Cell should not be styled selected since it is masked.
    expect(wrapper.find('td.selectable')).toHaveLength(0); // Cell should not be styled selectable since it is masked.

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a pinned cell', () => {
    jest.spyOn(console, 'error').mockImplementation(); // eslint-disable-line no-console

    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{ pinnedColumnOffsets: [0] }}>
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={0}
          key="key"
          isSelected={false}
          isRowHeader
          onCellSelect={jest.fn}
          height="50px"
        >
          Pinned cell data
        </Cell>
      </ColumnContext.Provider>,
    );

    expect(wrapper.find('.pinned')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    console.error.mockRestore(); // eslint-disable-line no-console
  });
});

