import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import StatusView from '../../../StatusView';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <StatusView id="statusView" variant="error" className={cx('status-view-2')} message="An exception was thrown">
    <Button text="OK" key="1" id="button1" />
    <Button text="Cancel" key="2" id="button2" />
  </StatusView>
);
