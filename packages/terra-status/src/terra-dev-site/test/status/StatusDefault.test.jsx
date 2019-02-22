import React from 'react';
import classNames from 'classnames/bind';
import Status from '../../../Status';
import styles from '../../doc/example/colors.module.scss';

const cx = classNames.bind(styles);

const simpleText = <div style={{ padding: '5px' }}>Sample text</div>;

const StatusDefault = () => (
  <div>
    <Status id="status" colorClass={cx(['attention'])} visuallyHiddenText="Status Attention">{simpleText}</Status>
  </div>
);

export default StatusDefault;
