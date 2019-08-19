import React from 'react';
import classnames from 'classnames/bind';
import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container-spacing-wrapper')}>
    <SplitButton primaryOptionLabel="Split" onSelect={() => {}} id="split">
      <Item label="1st" onSelect={() => {}} />
      <Item label="2nd" onSelect={() => {}} />
      <Item label="3rd" onSelect={() => {}} />
    </SplitButton>
  </div>
);
