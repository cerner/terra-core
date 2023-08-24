import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDraggableExample = () => (
  <>
    <p id="list-help">
      Select a patient from the list to view patient details.
    </p>
    <List role="listbox" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable>
      <Item
        key="1"
        isSelectable
        isSelected
      >
        <Placeholder title="John Smith" className={cx('placeholder')} />
      </Item>
      <Item
        key="2"
        isSelectable
      >
        <Placeholder title="Mary Jones" className={cx('placeholder')} />
      </Item>
      <Item
        key="3"
        isSelectable
      >
        <Placeholder title="Sam Brown" className={cx('placeholder')} />
      </Item>
      <Item
        key="4"
        isSelectable
      >
        <Placeholder title="John David" className={cx('placeholder')} />
      </Item>
    </List>
  </>
);

export default ListDraggableExample;
