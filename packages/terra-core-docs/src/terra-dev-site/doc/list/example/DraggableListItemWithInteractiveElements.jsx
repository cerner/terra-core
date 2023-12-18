import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import classNames from 'classnames/bind';
import Checkbox from 'terra-form-checkbox';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDraggableCheckboxExample = () => (
  <>
    <p id="list-help">
      Select a patient from the list to view patient details.
    </p>
    <List role="listbox" isTabFocusDisabled dividerStyle="standard" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable>
      <Item
        key="1"
        isSelectable
        isSelected
      >
        <Checkbox id="defaultCheckbox_1" className={cx('list-item')} labelText="John Smith" />
      </Item>
      <Item
        key="2"
        isSelectable
      >
        <Checkbox id="defaultCheckbox_2" className={cx('list-item')} labelText="Mary Jones" />
      </Item>
      <Item
        key="3"
        isSelectable
      >
        <Checkbox id="defaultCheckbox_3" className={cx('list-item')} labelText="Sam Brown" />
      </Item>
      <Item
        key="4"
        isSelectable
      >
        <Checkbox id="defaultCheckbox_4" className={cx('list-item')} labelText="John David" />
      </Item>
    </List>
  </>
);

export default ListDraggableCheckboxExample;
