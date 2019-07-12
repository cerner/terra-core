import React from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <SplitButton primaryOptionLabel="Split" onClick={() => {}} id="split">
      <Item label="1st" onClick={() => {}} />
      <Item label="2nd" onClick={() => {}} />
      <Item label="3rd" onClick={() => {}} />
    </SplitButton>
  </div>
);
