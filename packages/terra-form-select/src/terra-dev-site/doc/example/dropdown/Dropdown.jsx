import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownSelect from 'terra-form-select/lib/DropdownSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DropdownSelectExample = () => (
  <DropdownSelect placeholder="Select a color" className={cx('form-select')}>
    <DropdownSelect.Option value="blue" display="Blue" />
    <DropdownSelect.Option value="green" display="Green" />
    <DropdownSelect.Option value="purple" display="Purple" />
    <DropdownSelect.Option value="red" display="Red" />
    <DropdownSelect.Option value="violet" display="Violet" />
  </DropdownSelect>
);

export default DropdownSelectExample;
