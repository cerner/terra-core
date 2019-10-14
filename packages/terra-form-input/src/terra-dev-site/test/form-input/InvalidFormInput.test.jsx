import React from 'react';
import classNames from 'classnames/bind';
import Input from '../../../Input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const InvalidInput = () => (
  <div className={cx('content-wrapper')}>
    <Input isInvalid id="form-input-invalid" ariaLabel="label" />
  </div>
);

export default InvalidInput;
