import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Combobox from 'terra-form-select/lib/Combobox';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <Combobox placeholder="Select a color" className={cx('form-select')}>
    <Combobox.OptGroup label="Shade of blue">
      <Combobox.Option value="blue" display="Blue" />
      <Combobox.Option value="cyan" display="Cyan" />
      <Combobox.Option value="teal" display="Teal" />
      <Combobox.Option value="azul" display="Azul" />
      <Combobox.Option value="aqua" display="Aqua" />
    </Combobox.OptGroup>
    <Combobox.OptGroup label="Shades of green">
      <Combobox.Option value="green" display="Green" />
      <Combobox.Option value="forest" display="Forest Green" />
      <Combobox.Option value="dark" display="Dark Green" />
      <Combobox.Option value="neon" display="Neon Green" />
    </Combobox.OptGroup>
  </Combobox>
);

export default OptGroupExample;
