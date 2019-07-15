/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <SplitButton
      primaryOptionLabel="Primary option"
      onSelect={() => { console.log('primary option'); }}
      disabled
    >
      <Item label="1st Option" onSelect={() => { console.log('hi'); }} />
      <Item label="2nd Option" onSelect={() => { console.log('bye'); }} />
      <Item label="3rd Option" onSelect={() => { console.log('eyb'); }} />
      <Item label="4th Option" onSelect={() => { console.log('ih'); }} />
    </SplitButton>
  </div>
);
