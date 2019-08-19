import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import classNames from 'classnames/bind';
import Alert from 'terra-alert';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const CustomExample = () => (
  <Alert type="custom" title="Help!" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>
    <span>
      This is a
      <b> custom</b>
      {' '}
      alert
    </span>
  </Alert>
);

export default CustomExample;
