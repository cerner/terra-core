import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <DropdownButton label="Dropdown" id="dropdown">
      <Item label="1st" onSelect={() => {}} />
      <Item label="2nd" onSelect={() => {}} />
      <Item label="3rd" onSelect={() => {}} />
    </DropdownButton>
  </div>
);
