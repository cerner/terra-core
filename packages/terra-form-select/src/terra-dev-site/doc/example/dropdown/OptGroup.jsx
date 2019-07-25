import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DropdownSelect from 'terra-form-select/lib/DropdownSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <DropdownSelect placeholder="Select a color" className={cx('form-select')}>
    <DropdownSelect.OptGroup label="Shade of blue">
      <DropdownSelect.Option value="blue" display="Blue" />
      <DropdownSelect.Option value="cyan" display="Cyan" />
      <DropdownSelect.Option value="teal" display="Teal" />
      <DropdownSelect.Option value="azul" display="Azul" />
      <DropdownSelect.Option value="aqua" display="Aqua" />
    </DropdownSelect.OptGroup>
    <DropdownSelect.OptGroup label="Shades of green">
      <DropdownSelect.Option value="green" display="Green" />
      <DropdownSelect.Option value="forest" display="Forest Green" />
      <DropdownSelect.Option value="dark" display="Dark Green" />
      <DropdownSelect.Option value="neon" display="Neon Green" />
    </DropdownSelect.OptGroup>
  </DropdownSelect>
);

export default OptGroupExample;
