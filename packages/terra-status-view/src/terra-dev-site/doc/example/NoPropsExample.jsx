import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';
import classNames from 'classnames/bind';
import styles from './StatusViewDocCommon.module.scss';

const cx = classNames.bind(styles);

const NoPropsExample = (
  <StatusView className={cx('status-view-width')} />
);

export default NoPropsExample;
