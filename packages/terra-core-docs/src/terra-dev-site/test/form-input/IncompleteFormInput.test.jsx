import React from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const IncompleteInput = () => (
  <div className={cx('content-wrapper')}>
    <Input required isIncomplete id="form-input-incomplete" ariaLabel="label" />
  </div>
);

export default IncompleteInput;
