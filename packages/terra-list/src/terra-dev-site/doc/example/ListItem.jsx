import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListSectionExample = () => (
  <List role="listbox" aria-label="example-label">
    <Item
      key="default"
      id="default_list_item"
    >
      <Placeholder title="Default ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="chevron"
      id="chevron_list_item"
      hasChevron
    >
      <Placeholder title="Chevron ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="selectable"
      id="selectable_list_item"
      isSelectable
    >
      <Placeholder title="Selectable ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="selected"
      id="selected_list_item"
      isSelectable
      isSelected
    >
      <Placeholder title="Selected ListItem" className={cx('placeholder')} />
    </Item>
  </List>
);

export default ListSectionExample;
