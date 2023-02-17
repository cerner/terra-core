import React from 'react';
import Radio from 'terra-form-radio';
import classNames from 'classnames/bind';
import styles from './RadioTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('spacing')}>
    <Radio id="default" labelText="Default Radio" />
  </div>
);
