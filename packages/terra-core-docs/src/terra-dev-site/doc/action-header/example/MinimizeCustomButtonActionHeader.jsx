/* eslint-disable no-alert */
import React from 'react';
import classNames from 'classnames/bind';
import ActionHeader from 'terra-action-header';
import { Placeholder } from '@cerner/terra-docs';
import styles from './ActionHeaderDocCommon.scss';

const cx = classNames.bind(styles);

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader text="Minimize Custom Button Action Header" onMinimize={() => alert('You clicked minimize!')} onClose={() => alert('You clicked close!')}>
      <Placeholder className={cx('placeholder-wrapper')} title="Collapsible Menu View" />
    </ActionHeader>
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
