import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Button } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <DropdownButton label="Dropdown" id="dropdown">
      <Button label="1st" onClick={() => {}} />
      <Button label="2nd" onClick={() => {}} />
      <Button label="3rd" onClick={() => {}} />
    </DropdownButton>
  </div>
);
