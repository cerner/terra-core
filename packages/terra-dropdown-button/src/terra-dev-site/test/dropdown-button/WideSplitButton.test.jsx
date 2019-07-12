import React from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Item } from '../../../SplitButton';
import styles from './WideButtons.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <SplitButton primaryOptionLabel={'Wide Label '.repeat(50)} onClick={() => {}} id="wide-label">
      <Item label="1st" onClick={() => {}} />
      <Item label="2nd" onClick={() => {}} />
    </SplitButton>
    <SplitButton primaryOptionLabel="Wide option" onClick={() => {}} id="wide-option">
      <Item label={'Wide option '.repeat(50)} onClick={() => {}} />
      <Item label="Not very wide option" onClick={() => {}} />
    </SplitButton>
  </div>
);
