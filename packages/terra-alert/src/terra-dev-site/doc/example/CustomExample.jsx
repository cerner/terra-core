import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';
import styles from './colors.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CustomExample = () => (
  <Alert type="custom" title="Help!" customColorClass={cx(["terra-alert-custom-red-color"])} customIcon={<IconHelp />}>
    <span>
      This is a
      <b>custom</b>
      {' '}
      alert
    </span>
  </Alert>
);

export default CustomExample;
