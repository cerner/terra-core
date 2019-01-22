import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item, Utils } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-select';

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
        <Placeholder title={itemData.title} style={{ height: '50px' }} />
      </Item>
    );
  }

  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <List
        isDivided
        role="listbox"
        aria-multiselectable
      >
        {this.createListItems(mockData)}
      </List>
    );
  }
}

export default MutliSelectList;
