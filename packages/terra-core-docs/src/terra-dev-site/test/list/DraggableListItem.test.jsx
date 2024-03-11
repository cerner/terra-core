import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import classNames from 'classnames/bind';
import styles from './DraggableListItem.module.scss';

const cx = classNames.bind(styles);

const DraggableListItemTest = () => (
  <List className={cx('draggable-list')} role="listbox" aria-label="test-label" dividerStyle="standard" isDraggable>
    <Item
      key="selected"
      isSelected
      isSelectable
      id="selectable-item"
    >
      <p>Cardiology</p>
    </Item>
    <Item
      key="selectable2"
      isSelectable
      id="selectable-item2"
    >
      <p>Radiology</p>
    </Item>
    <Item
      key="selectable3"
      isSelectable
    >
      <p>Paediatrics</p>
    </Item>
    <Item
      key="selectable4"
      isSelectable
    >
      <p>Oncology</p>
    </Item>
  </List>
);

export default DraggableListItemTest;
