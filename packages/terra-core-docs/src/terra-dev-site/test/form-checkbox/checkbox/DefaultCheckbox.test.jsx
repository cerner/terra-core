import React from 'react';
import Checkbox from 'terra-form-checkbox';

import classNames from 'classnames/bind';
import styles from './CheckboxTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('spacing')}>
    <Checkbox id="default" labelText="Default Checkbox" />
  </div>
);
