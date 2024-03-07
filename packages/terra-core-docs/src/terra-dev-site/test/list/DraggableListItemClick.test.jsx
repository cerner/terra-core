import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import classNames from 'classnames/bind';
import styles from './DraggableListItem.module.scss';

const cx = classNames.bind(styles);

const DraggableListItemClickTest = () => (
  <List className={cx('draggable-list')} role="listbox" aria-label="test-label" dividerStyle="standard" isDraggable>
    <Item
      key="selected"
      isSelectable
      id="selectable-item"
    >
      <p>Cardiology</p>
    </Item>
    <Item
      key="selectable2"
      isSelectable
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

export default DraggableListItemClickTest;
