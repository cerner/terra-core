import React from 'react';
import classNames from 'classnames/bind';
import StatusView from '../../../StatusView';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => <StatusView id="statusView" variant="no-data" className={cx('status-view-1')} />;
