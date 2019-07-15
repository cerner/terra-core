import React from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Item } from '../../../SplitButton';
import styles from './WideButtons.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <SplitButton primaryOptionLabel={'Wide Label '.repeat(50)} onSelect={() => {}} id="wide-label">
      <Item label="1st" onSelect={() => {}} />
      <Item label="2nd" onSelect={() => {}} />
    </SplitButton>
    <SplitButton primaryOptionLabel="Wide option" onSelect={() => {}} id="wide-option">
      <Item label={'Wide option '.repeat(50)} onSelect={() => {}} />
      <Item label="Not very wide option" onSelect={() => {}} />
    </SplitButton>
  </div>
);
