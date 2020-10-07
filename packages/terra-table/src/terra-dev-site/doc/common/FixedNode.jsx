import React from 'react';
import classNames from 'classnames/bind';
import {Placeholder} from '@cerner/terra-docs';
import styles from './FixedNode.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable */
const FixedNode = ({ title }) => (
  <div className={cx('node')}>
    <Placeholder title={title} />
  </div>
);

export default FixedNode;
