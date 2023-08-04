import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDraggableExample = () => (
  <List role="listbox" aria-label="example-label">
    <Item
      key="1"
      isSelectable
      isSelected
    >
      <Placeholder title="List Item 1" className={cx('placeholder')} />
    </Item>
    <Item
      key="2"
      isSelectable
    >
      <Placeholder title="List Item 2" className={cx('placeholder')} />
    </Item>
    <Item
      key="3"
      isSelectable
    >
      <Placeholder title="List Item 3" className={cx('placeholder')} />
    </Item>
    <Item
      key="4"
      isSelectable
    >
      <Placeholder title="List Item 4" className={cx('placeholder')} />
    </Item>
  </List>
);

export default ListDraggableExample;
