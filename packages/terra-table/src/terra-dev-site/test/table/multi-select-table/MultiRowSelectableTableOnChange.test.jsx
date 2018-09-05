import React from 'react';
import Table from '../../../../Table';

class MultiRowSelectableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndexes: null };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedIndexes, lastSelectedIndex) {
    this.setState({
      selectedIndexes,
      lastSelectedIndex,
    });
  }

  render() {
    return (
      <div>
        <h3 id="selected-indexes">
          Selected Items:
          {' '}
          {this.state.selectedIndexes}
        </h3>
        <h3 id="last-selected-index">
          Last Selected Item:
          {' '}
          {this.state.lastSelectedIndex}
        </h3>
        <Table isStriped={false}>
          <Table.Header>
            <Table.HeaderCell content="Name" key="NAME" minWidth="small" />
            <Table.HeaderCell content="Address" key="ADDRESS" minWidth="medium" />
            <Table.HeaderCell content="Phone Number" key="PHONE_NUMBER" minWidth="large" />
          </Table.Header>
          <Table.MultiSelectableRows onChange={this.handleSelection}>
            <Table.Row key="PERSON_0">
              <Table.Cell content="John Smith" key="NAME" />
              <Table.Cell content="123 Adams Drive" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
            <Table.Row key="PERSON_1">
              <Table.Cell content="Jane Smith" key="NAME" />
              <Table.Cell content="321 Drive Street" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
            <Table.Row key="PERSON_2">
              <Table.Cell content="Dave Smith" key="NAME" />
              <Table.Cell content="213 Raymond Road" key="ADDRESS" />
              <Table.Cell content="111-222-3333" key="PHONE_NUMBER" />
            </Table.Row>
          </Table.MultiSelectableRows>
        </Table>
      </div>
    );
  }
}

export default MultiRowSelectableTable;
