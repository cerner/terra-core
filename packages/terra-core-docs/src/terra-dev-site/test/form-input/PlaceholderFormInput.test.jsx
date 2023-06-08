import React from 'react';
import classNames from 'classnames/bind';
import Input from 'terra-form-input';
import styles from './common/Input.test.module.scss';

const cx = classNames.bind(styles);

const PlaceholderFormInput = () => (
  <div className={cx('content-wrapper')}>
    <Input id="form-input-placeholder" ariaLabel="label" placeholder="Enter The Text" showMpageFusionPlaceholder />
  </div>
);

export default PlaceholderFormInput;
