import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownSelect from 'terra-form-select/lib/DropdownSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <DropdownSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <DropdownSelect.Option value="black" display="Black" />
    <DropdownSelect.Option value="blue" display="Blue" />
    <DropdownSelect.Option value="brown" display="Brown" />
    <DropdownSelect.Option value="green" display="Green" />
    <DropdownSelect.Option value="purple" display="Purple" />
    <DropdownSelect.Option value="red" display="Red" />
    <DropdownSelect.Option value="violet" display="Violet" />
    <DropdownSelect.Option value="white" display="White" />
    <DropdownSelect.Option value="yellow" display="Yellow" />
  </DropdownSelect>
);

export default MaxHeightExample;
