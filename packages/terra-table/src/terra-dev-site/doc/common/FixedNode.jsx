import React from 'react';
import classNames from 'classnames/bind';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import styles from './FixedNode.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const FixedNode = ({ title }) => (
  <div className={cx('node')}>
    <Placeholder title={title} />
  </div>
);

export default FixedNode;
