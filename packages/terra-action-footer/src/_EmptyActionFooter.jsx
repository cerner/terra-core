import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './EmptyActionFooter.scss';

const cx = classNames.bind(styles);

const EmptyActionFooter = ({
  ...customProps
}) => (
  <div {...customProps} className={cx('empty-action-footer', customProps.className)} />
);

export default EmptyActionFooter;
