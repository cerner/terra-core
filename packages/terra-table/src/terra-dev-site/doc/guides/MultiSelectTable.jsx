import React from 'react';
import Table, {
  Row, Cell, Header, HeaderCell, Utils,
} from 'terra-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const maxSectionCount = 3;

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

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
        header={(
          <Header>
            <HeaderCell>Column 0</HeaderCell>
            <HeaderCell>Column 1</HeaderCell>
            <HeaderCell>Column 2</HeaderCell>
          </Header>
        )}
      >
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default MutliSelectTable;
