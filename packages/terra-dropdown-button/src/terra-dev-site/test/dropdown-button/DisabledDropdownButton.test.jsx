/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <DropdownButton
      label="Primary option"
      onClick={() => { console.log('primary option'); }}
      disabled
    >
      <Item label="1st Option" onClick={() => { console.log('hi'); }} />
      <Item label="2nd Option" onClick={() => { console.log('bye'); }} />
      <Item label="3rd Option" onClick={() => { console.log('eyb'); }} />
      <Item label="4th Option" onClick={() => { console.log('ih'); }} />
    </DropdownButton>
  </div>
);
