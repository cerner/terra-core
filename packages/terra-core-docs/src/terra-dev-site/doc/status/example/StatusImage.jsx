import React from 'react';
import Status from 'terra-status';
import classNames from 'classnames/bind';
import placeholderPic150x150 from './150x150.jpg';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const image = <img className={cx('image-wrapper')} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;

const StatusImage = () => (
  <Status colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">{image}</Status>
);

export default StatusImage;
