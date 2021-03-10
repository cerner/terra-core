import React from 'react';
import classNames from 'classnames/bind';
import StatusView from '../../../StatusView';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('status-view-wrapper-3')}>
    <StatusView id="statusView" variant="no-data" className={cx('status-view-wrapper-3')} />
  </div>
);
