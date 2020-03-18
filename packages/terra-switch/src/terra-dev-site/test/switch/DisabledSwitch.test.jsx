import React from 'react';
import classNames from 'classnames/bind';
import Switch from '../../../Switch';
import styles from './SwitchCommonExample.module.scss';

const cx = classNames.bind(styles);

const DisabledSwitch = () => (
  <div className={cx('container')}>
    <Switch
      buttonId="disabledSwitch"
      labelId="label2"
      checked
      label="Label"
      disabled
    />
  </div>
);

export default DisabledSwitch;
