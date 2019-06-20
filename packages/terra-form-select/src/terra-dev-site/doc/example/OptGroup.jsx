import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Select from 'terra-form-select/lib/Select';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <Select placeholder="Select a color" className={cx('form-select')}>
    <Select.OptGroup label="Shade of blue">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="cyan" display="Cyan" />
      <Select.Option value="teal" display="Teal" />
      <Select.Option value="azul" display="Azul" />
      <Select.Option value="aqua" display="Aqua" />
    </Select.OptGroup>
    <Select.OptGroup label="Shades of green">
      <Select.Option value="green" display="Green" />
      <Select.Option value="forest" display="Forest Green" />
      <Select.Option value="dark" display="Dark Green" />
      <Select.Option value="neon" display="Neon Green" />
    </Select.OptGroup>
  </Select>
);

export default OptGroupExample;
