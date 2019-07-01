import React from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Button } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => (
  <div className={cx('button-spacing-wrapper')}>
    <SplitButton primaryOptionLabel="Split" onClick={() => {}} id="split">
      <Button label="1st" onClick={() => {}} />
      <Button label="2nd" onClick={() => {}} />
      <Button label="3rd" onClick={() => {}} />
    </SplitButton>
  </div>
);
