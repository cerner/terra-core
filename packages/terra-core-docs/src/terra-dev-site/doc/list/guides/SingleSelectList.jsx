import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import mockData from './mock-data/mock-select';
import styles from '../example/ListDocCommon.module.scss';

const cx = classNames.bind(styles);

class SingleSelectList extends React.Component {
  constructor(props) {
    super(props);
    this.createListItem = this.createListItem.bind(this);
    this.handleItemSelection = this.handleItemSelection.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.setListNode = this.setListNode.bind(this);
    this.state = { selectedKey: null };
  }

  handleItemSelection(event, metaData) {
    event.preventDefault();
    if (this.state.selectedKey !== metaData.key) {
      this.setState({ selectedKey: metaData.key });
    }
  }

  handleOnClick() {
    this.firstListItem.focus();
  }

  setListNode(element) {
    this.firstListItem = element;
  }

  createListItem(itemData, index) {
    const listItemRef = (index === 0) ? this.setListNode : null;
    return (
      <Item
        key={itemData.key}
        isSelectable
        isSelected={this.state.selectedKey === itemData.key}
        metaData={{ key: itemData.key }}
        onSelect={this.handleItemSelection}
        refCallback={listItemRef}
      >
        <Placeholder title={itemData.title} className={cx('placeholder')} />
      </Item>
    );
  }

  createListItems(data) {
    return data.map((childItem, index) => this.createListItem(childItem, index));
  }

  render() {
    return (
      <div>
        <p>
          <b>Note</b>
          {' '}
          Tab key Navigation is disabled for below list items. Inorder to interact with list-item user should set programmatic focus to one of the list item depending on the required scenario.
          {' '}
        </p>
        <button type="button" onClick={this.handleOnClick}>Select Item 0</button>
        <List dividerStyle="standard" ariaSelectionStyle="single-select" isTabFocusDisabled>
          {this.createListItems(mockData)}
        </List>
      </div>
    );
  }
}

export default SingleSelectList;
