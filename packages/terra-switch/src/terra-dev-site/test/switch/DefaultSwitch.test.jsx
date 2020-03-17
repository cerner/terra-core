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
        id="defaultSwitch"
        labelId="label1"
        checked={value}
        label="Label"
        onChange={(checked, event) => { setValue(!checked); }}
      />
    </div>
  );
};

export default DefaultSwitch;
