import React from 'react';
import List, { Item } from 'terra-list/lib/index';

const mockData = [
  {
    title: 'John Smith',
    key: 'unique-0',
  },
  {
    title: 'Mary Jane',
    key: 'unique-1',
  },
  {
    title: 'Peter Parker',
    key: 'unique-2',
  },
  {
    title: 'Clark Kent',
    key: 'unique-3',
  },
  {
    title: 'Anne White',
    key: 'unique-4',
  },
];

class SingleSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.createListItem = this.createListItem.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.state = { selectedKey: null };
  }

  handleItemSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
  }

  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
      >
        <p>{itemData.title}</p>
      </Item>
    );
  }

  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <>
        <p id="list-help">
          Select a patient from the list to view patient details.
        </p>
        <List ariaDescribedBy="list-help" dividerStyle="standard" ariaSelectionStyle="single-select">
          {this.createListItems(mockData)}
        </List>
      </>
    );
  }
}

export default SingleSelectList;
