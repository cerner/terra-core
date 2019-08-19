/* eslint-disable no-alert */
import React from 'react';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import styles from './ActionHeaderDocCommon.scss';

const cx = classNames.bind(styles);

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader title="Minimize Custom Button Action Header" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>
      <Placeholder className={cx('placeholder-wrapper')} title="Collapsible Menu View" />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
