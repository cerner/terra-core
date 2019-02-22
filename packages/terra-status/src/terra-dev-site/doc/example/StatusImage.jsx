import React from 'react';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Status from 'terra-status/lib/Status';
import placeholderPic150x150 from 'terra-status/lib/terra-dev-site/doc/example/150x150.jpg';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import classNames from 'classnames/bind';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const image = <img style={{ display: 'block' }} height="150" width="150" src={placeholderPic150x150} alt="placeholder" />;

const StatusImage = () => (
  <Status colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">{image}</Status>
);

export default StatusImage;
