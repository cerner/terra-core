import React, { useState } from 'react';
import List, { Item } from 'terra-list';
import classNames from 'classnames/bind';
import Checkbox from 'terra-form-checkbox';
import styles from './ListDocCommon.module.scss';

const cx = classNames.bind(styles);

const ListDraggableCheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, e.target.value]);
    } else {
      const filterData = checkedItems.filter(item => item !== e.target.value);
      setCheckedItems([...filterData]);
    }
  };

  return (
    <>
      <p id="list-help">
        Select a patient from the list to view patient details.
      </p>
      <List role="listbox" dividerStyle="standard" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable>
        <Item
          key="1"
          isSelectable
          isSelected={checkedItems.includes('John Smith')}
        >
          <Checkbox id="defaultCheckbox_1" className={cx('list-item')} labelText="John Smith" value="John Smith" onChange={handleCheckboxChange} />
        </Item>
        <Item
          key="2"
          isSelectable
          isSelected={checkedItems.includes('Mary Jones')}
        >
          <Checkbox id="defaultCheckbox_2" className={cx('list-item')} labelText="Mary Jones" value="Mary Jones" onChange={handleCheckboxChange} />
        </Item>
        <Item
          key="3"
        >
          <Checkbox id="defaultCheckbox_3" className={cx('list-item-focus')} labelText="Sam Brown" value="Sam Brown" />
        </Item>
        <Item
          key="4"
        >
          <Checkbox id="defaultCheckbox_4" className={cx('list-item-focus')} labelText="John David" value="John David" />
        </Item>
      </List>
    </>
  );
};

export default ListDraggableCheckboxExample;
