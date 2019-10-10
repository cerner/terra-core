import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const DisabledValueInput = () => (
  <div className={cx('content-wrapper')}>
    <Input disabled id="form-input-disabled-value" value="value" ariaLabel="label" />
  </div>
);

export default DisabledValueInput;
