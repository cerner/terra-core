import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Switch from '../../../Switch';
import styles from './SwitchCommonExample.module.scss';

const cx = classNames.bind(styles);

const SwitchWithLongLabelText = () => {
  const [value, setValue] = useState(true);
  return (
    <div className={cx('container')}>
      <Switch
        buttonId="switchWithLongLabel"
        labelId="label3"
        checked={value}
        labelText="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
        onChange={setValue}
      />
    </div>
  );
};

export default SwitchWithLongLabelText;
