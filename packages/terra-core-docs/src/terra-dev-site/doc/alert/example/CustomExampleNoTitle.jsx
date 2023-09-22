import React from 'react';
import { IconHelp } from 'terra-icon';
import classNames from 'classnames/bind';
import Alert from 'terra-alert';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const CustomExampleNoTitle = () => (
  <Alert type="custom" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>
    <span>
      This is a
      <b> custom</b>
      {' '}
      notification banner
    </span>
  </Alert>
);

export default CustomExampleNoTitle;
