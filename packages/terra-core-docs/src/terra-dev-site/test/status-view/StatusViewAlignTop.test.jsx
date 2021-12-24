import React from 'react';
import classNames from 'classnames/bind';
import StatusView from 'terra-status-view';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => <StatusView id="statusView" variant="no-matching-results" className={cx('status-view-1')} isAlignedTop />;
