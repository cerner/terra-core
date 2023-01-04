import React from 'react';
import List, { Item, Utils } from 'terra-list/lib/index';
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

const maxSectionCount = 3;

class MutliSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.createListItem = this.createListItem.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.state = { selectedKeys: [] };
  }

  handleItemSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));
  }

  createListItem(itemData) {
    return (
      <Item
        key={itemData.key}
        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}
        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}
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
      <List dividerStyle="standard" ariaSelectionStyle="multi-select">
        {this.createListItems(mockData)}
      </List>
    );
  }
}

export default MutliSelectList;
