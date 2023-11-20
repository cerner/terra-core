import React, { useState } from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledExample = () => {
  const [value, setValue] = useState('blue');

  return (
    <Combobox placeholder="Select a color" value={value} ariaLabel="Select a color" onChange={setValue} className={cx('form-select')}>
      <Combobox.Option value="blue" display="Blue" />
      <Combobox.Option value="green" display="Green" />
      <Combobox.Option value="purple" display="Purple" />
      <Combobox.Option value="red" display="Red" />
      <Combobox.Option value="violet" display="Violet" />
    </Combobox>
  );
};

export default ControlledExample;
