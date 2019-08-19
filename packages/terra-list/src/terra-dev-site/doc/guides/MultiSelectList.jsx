import React from 'react';
import List, { Item, Utils } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import mockData from './mock-data/mock-select';
import styles from '../example/ListDocCommon.module.scss';

const cx = classNames.bind(styles);

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
        <Placeholder title={itemData.title} className={cx('placeholder')} />
      </Item>
    );
  }

  createListItems(data) {
    return data.map(childItem => this.createListItem(childItem));
  }

  render() {
    return (
      <List
        dividerStyle="standard"
        role="listbox"
        aria-multiselectable
      >
        {this.createListItems(mockData)}
      </List>
    );
  }
}

export default MutliSelectList;
