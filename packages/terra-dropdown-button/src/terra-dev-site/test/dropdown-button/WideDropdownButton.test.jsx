import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './WideButtons.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <DropdownButton label={'Wide Label '.repeat(50)} onSelect={() => {}} id="wide-label">
      <Item label="1st" onSelect={() => {}} />
      <Item label="2nd" onSelect={() => {}} />
    </DropdownButton>
    <DropdownButton label="Wide option" onSelect={() => {}} id="wide-option">
      <Item label={'Wide option '.repeat(50)} onSelect={() => {}} />
      <Item label="Not very wide option" onSelect={() => {}} />
    </DropdownButton>
  </div>
);
