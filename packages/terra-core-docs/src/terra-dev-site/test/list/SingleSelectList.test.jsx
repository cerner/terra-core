import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';

const mockData = [
  {
    title: 'Item 0',
    key: 'unique-0',
  },
  {
    title: 'Item 1',
    key: 'unique-1',
  },
  {
    title: 'Item 2',
    key: 'unique-2',
  },
  {
    title: 'Item 3',
    key: 'unique-3',
  },
  {
    title: 'Item 4',
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
        <Placeholder title={itemData.title} />
      </Item>
    );
  }

  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <List dividerStyle="standard" ariaSelectionStyle="single-select">
        {this.createListItems(mockData)}
      </List>
    );
  }
}

export default SingleSelectList;
