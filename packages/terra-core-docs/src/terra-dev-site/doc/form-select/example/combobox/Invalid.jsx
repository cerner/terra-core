import React from 'react';
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const InvalidExample = () => (
  <Combobox placeholder="Select a color" isInvalid className={cx('form-select')}>
    <Combobox.Option value="blue" display="Blue" />
    <Combobox.Option value="green" display="Green" />
    <Combobox.Option value="purple" display="Purple" />
    <Combobox.Option value="red" display="Red" />
    <Combobox.Option value="violet" display="Violet" />
  </Combobox>
);

export default InvalidExample;
