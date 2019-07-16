import React from 'react';
import classNames from 'classnames/bind';
import StatusView from '../../../StatusView';
import styles from './StatusViewTestCommon.module.scss';

const cx = classNames.bind(styles);

const ipsum = 'Lorem ipsum dolor';
const StatusViewButtons = [
  {
    text: ipsum,
    key: 1,
    id: 'button1',
  }, {
    text: ipsum,
    key: 2,
    id: 'button2',
  },
];

/* eslint-disable react/forbid-dom-props */
export default () => (
  <div className={cx('status-view-wrapper-2')}>
    <StatusView id="statusView" variant="error" title={ipsum} message={ipsum} buttonAttrs={StatusViewButtons} />
  </div>
);
