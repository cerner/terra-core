import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledExample = () => {
  const [value, setValue] = useState('blue');

  return (
    <SingleSelect placeholder="Select a color" value={value} onChange={setValue} className={cx('form-select')}>
      <SingleSelect.Option value="blue" display="Blue" />
      <SingleSelect.Option value="green" display="Green" />
      <SingleSelect.Option value="purple" display="Purple" />
      <SingleSelect.Option value="red" display="Red" />
      <SingleSelect.Option value="violet" display="Violet" />
    </SingleSelect>
  );
};

export default ControlledExample;
