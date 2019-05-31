import React from 'react';
import Table, {
  Row, Cell, HeaderCell,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const widths = [
  { static: { value: 60, unit: 'px' } },
  { percentage: 20 },
  { scalar: 2 },
];

// const widths = [
//   { static: { value: 60, unit: 'px' } },
//   { static: { value: 60, unit: 'px' } },
//   { static: { value: 60, unit: 'px' } },
// ];

const createCell = (cell, index) => (
  <Cell key={cell.key} width={widths[index]}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map((cell, index) => createCell(cell, index));

class SingleSelectTable extends React.Component {
  constructor(props) {
    super(props);
    this.createTableRow = this.createTableRow.bind(this);
    this.createTableRows = this.createTableRows.bind(this);
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.state = { selectedKey: null };
  }

  handleRowSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
  }

  createTableRow(itemData) {
    return (
      <Row
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleRowSelection}
      >
        {createCellsForRow(itemData.cells, this.state)}
      </Row>
    );
  }

  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table
        fill
        style={{ height: '200px' }}
        paddingStyle="standard"
        headerCells={[
          <HeaderCell key="cell-1" width={widths[0]}>Fixed</HeaderCell>,
          <HeaderCell key="cell-2" width={widths[1]}>Percentage</HeaderCell>,
          <HeaderCell key="cell-3" width={widths[2]}>Scalar 2</HeaderCell>,
          <HeaderCell key="cell-4">Default</HeaderCell>,
        ]}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default SingleSelectTable;
