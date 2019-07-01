/* eslint-disable no-console */
import React from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Button } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <DropdownButton
      label="Primary option"
      onClick={() => { console.log('primary option'); }}
      disabled
    >
      <Button label="1st Option" onClick={() => { console.log('hi'); }} />
      <Button label="2nd Option" onClick={() => { console.log('bye'); }} />
      <Button label="3rd Option" onClick={() => { console.log('eyb'); }} />
      <Button label="4th Option" onClick={() => { console.log('ih'); }} />
    </DropdownButton>
  </div>
);
