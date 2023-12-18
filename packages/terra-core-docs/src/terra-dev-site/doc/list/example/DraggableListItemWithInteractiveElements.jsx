import React from 'react';
import List, { Item } from 'terra-list/lib/index';
import { Placeholder } from '@cerner/terra-docs';
import classNames from 'classnames/bind';
import styles from './ListDocCommon.module.scss';
import Checkbox from 'terra-form-checkbox';
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

<Checkbox id="defaultCheckbox_1" className={'list-item' } labelText="John Smith"/>
{/* <Placeholder title="John Smith" className={cx('placeholder')} /> */}


      </Item>
      <Item
        key="2"
        isSelectable
      >
        <Checkbox id="defaultCheckbox_2" className={'list-item' } labelText="Mary Jones"  />
        {/* <Placeholder title="Mary Jones" className={cx('placeholder')} /> */}

      </Item>
      <Item
        key="3"
        isSelectable
      >
         <Checkbox id="defaultCheckbox_3" className={'list-item' } labelText="Sam Brown"  />
        {/* <Placeholder title="Sam Brown" className={cx('placeholder')} /> */}
       
      </Item>
      <Item
        key="4"
        isSelectable
      >
        <Checkbox id="defaultCheckbox_4" className={'list-item' } labelText="John David" />
        {/* <Placeholder title="John David" className={cx('placeholder')} /> */}
      </Item>
    </List>
  </>
);

export default ListDraggableCheckboxExample;