import React from 'react';
import classNames from 'classnames/bind';
import { Pill } from 'terra-pills';
import styles from '../pill-list/PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const BasicPill = () => (
  <div className={cx('spacing-wrapper')}>
    <Pill label="Label" />
  </div>
);

export default BasicPill;
