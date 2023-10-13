import React from 'react';
import classNames from 'classnames/bind';

import Alert from 'terra-alert';
import { IconHelp } from 'terra-icon';
import styles from './colors.module.scss';

const cx = classNames.bind(styles);

const CustomExample = () => (
  <Alert
    type="custom"
    title="Help!"
    customColorClass={cx(['my-app-alert-help-example'])}
    customIcon={<IconHelp />}
  >
    Welcome to Terra!
  </Alert>
);

export default CustomExample;
