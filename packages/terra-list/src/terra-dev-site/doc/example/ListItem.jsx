import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, { Item } from 'terra-list/lib/index';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListSectionExample = () => (
  <List role="listbox">
    <Item
      key="default"
    >
      <Placeholder title="Default ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="chevron"
      hasChevron
    >
      <Placeholder title="Chevron ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="selectable"
      isSelectable
    >
      <Placeholder title="Selectable ListItem" className={cx('placeholder')} />
    </Item>
    <Item
      key="selected"
      isSelectable
      isSelected
    >
      <Placeholder title="Selected ListItem" className={cx('placeholder')} />
    </Item>
  </List>
);

export default ListSectionExample;
