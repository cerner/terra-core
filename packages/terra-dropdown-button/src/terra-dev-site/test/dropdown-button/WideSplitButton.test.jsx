import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Types } from '../../../DropdownButton';
import styles from './WideButtons.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <DropdownButton label={'Wide Label '.repeat(50)} callback={() => {}} type={Types.SPLIT} id="wide-label">
      <DropdownButton.Option label="1st" callback={() => {}} />
      <DropdownButton.Option label="2nd" callback={() => {}} />
    </DropdownButton>
    <DropdownButton label="Wide option" callback={() => {}} type={Types.SPLIT} id="wide-option">
      <DropdownButton.Option label={'Wide option '.repeat(50)} callback={() => {}} />
      <DropdownButton.Option label="Not very wide option" callback={() => {}} />
    </DropdownButton>
  </div>
);
