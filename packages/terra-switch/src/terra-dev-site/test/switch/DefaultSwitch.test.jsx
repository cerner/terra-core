import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Switch from '../../../Switch';
import styles from './SwitchCommonExample.module.scss';

const cx = classNames.bind(styles);

const DefaultSwitch = () => {
  const [value, setValue] = useState(true);
  return (
    <div className={cx('container')}>
      <Switch
        switchId="defaultSwitch"
        labelId="label1"
        checked={value}
        labelText="Label"
        onChange={setValue}
      />
    </div>
  );
};

export default DefaultSwitch;
