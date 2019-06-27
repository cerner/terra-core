import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
import classNames from 'classnames/bind';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
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
