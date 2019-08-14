import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const ComboboxExample = () => (
  <Combobox placeholder="Select a color" className={cx('form-select')}>
    <Combobox.Option value="blue" display="Blue" />
    <Combobox.Option value="green" display="Green" />
    <Combobox.Option value="purple" display="Purple" />
    <Combobox.Option value="red" display="Red" />
    <Combobox.Option value="violet" display="Violet" />
  </Combobox>
);

export default ComboboxExample;
