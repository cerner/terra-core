import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import StatusView from '../../../StatusView';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

const ipsum = 'Lorem ipsum dolor';

export default () => (
  <div className={cx('status-view-wrapper-2')}>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum}>
      <Button text={ipsum} key="1" id="button1" />
      <Button text={ipsum} key="2" id="button2" />
    </StatusView>
  </div>
);
