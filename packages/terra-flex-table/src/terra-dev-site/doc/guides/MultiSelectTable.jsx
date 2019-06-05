import React from 'react';
import Table, {
  Row, Cell, HeaderCell, Utils,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const widths = [
  { static: { value: 60, unit: 'px' } },
  { static: { value: 60, unit: 'px' } },
  { static: { value: 60, unit: 'px' } },
  { static: { value: 60, unit: 'px' } },
];

const createCell = (cell, index) => (
  <Cell key={cell.key} width={widths[index]}>
    {cell.title}
  </Cell>
);

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

class MutliSelectTable extends React.Component {
  constructor(props) {
    super(props);
    this.createTableRow = this.createTableRow.bind(this);
    this.createTableRows = this.createTableRows.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.state = { selectedKeys: [] };
  }

  handleRowSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }

  createTableRow(rowData) {
    return (
      <Row
        key={rowData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, rowData.key)}
        isSelected={this.state.selectedKeys.indexOf(rowData.key) >= 0}
        metaData={{ key: rowData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(rowData.cells)}
      </Row>
    );
  }

  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table
        aria-multiselectable
        paddingStyle="standard"
        headerCells={[
          <HeaderCell key="cell-0" width={widths[0]}>Fixed 0</HeaderCell>,
          <HeaderCell key="cell-1" width={widths[1]}>Fixed 1</HeaderCell>,
          <HeaderCell key="cell-2" width={widths[2]}>Fixed 2</HeaderCell>,
          <HeaderCell key="cell-3" width={widths[3]}>Fixed 3</HeaderCell>,
        ]}
        fill
        style={{ height: '200px' }}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default MutliSelectTable;
