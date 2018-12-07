import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Table, { Row, Cell } from 'terra-table/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

const createCell = (cell) => {
  return <Cell key={cell.key}><Placeholder title={cell.title} style={{ height: '50px' }} /></Cell>;
};

const createCellsForRow = (cells) => {
  return cells.map(cell => createCell(cell));
};

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
        {createCellsForRow(itemData.cells)}
      </Row>
    );
  }

  createTableRows(data) {
    return data.map(childItem => this.createTableRow(childItem));
  }

  render() {
    return (
      <Table>
        {this.createTableRows(mockData)}
      </Table>
    );
  }
}

export default SingleSelectTable;
