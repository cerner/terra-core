import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Button } from '../../../DropdownButton';
import styles from './WideButtons.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <DropdownButton label={'Wide Label '.repeat(50)} onClick={() => {}} id="wide-label">
      <Button label="1st" onClick={() => {}} />
      <Button label="2nd" onClick={() => {}} />
    </DropdownButton>
    <DropdownButton label="Wide option" onClick={() => {}} id="wide-option">
      <Button label={'Wide option '.repeat(50)} onClick={() => {}} />
      <Button label="Not very wide option" onClick={() => {}} />
    </DropdownButton>
  </div>
);
