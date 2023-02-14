import React from 'react';
import Checkbox from 'terra-form-checkbox';
import classNames from 'classnames/bind';
import styles from './CheckboxTestCommon.module.scss';

const cx = classNames.bind(styles);

const checkbox = () => (
  <div className={cx('spacing')}>
    <Checkbox id="disabled" labelText="Disabled Checkbox" disabled />
    <Checkbox id="disabledchecked" labelText="Disabled and Checked Checkbox" defaultChecked disabled />
  </div>
);

export default checkbox;
