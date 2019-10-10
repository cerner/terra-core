import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const ValueInput = () => (
  <div className={cx('content-wrapper')}>
    <Input id="form-input-value" value="value" ariaLabel="label" />
  </div>
);

export default ValueInput;
