import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultiSelect from 'terra-form-select/lib/MultiSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <MultiSelect placeholder="Select a color" className={cx('form-select')}>
    <MultiSelect.OptGroup label="Shade of blue">
      <MultiSelect.Option value="blue" display="Blue" />
      <MultiSelect.Option value="cyan" display="Cyan" />
      <MultiSelect.Option value="teal" display="Teal" />
      <MultiSelect.Option value="azul" display="Azul" />
      <MultiSelect.Option value="aqua" display="Aqua" />
    </MultiSelect.OptGroup>
    <MultiSelect.OptGroup label="Shades of green">
      <MultiSelect.Option value="green" display="Green" />
      <MultiSelect.Option value="forest" display="Forest Green" />
      <MultiSelect.Option value="dark" display="Dark Green" />
      <MultiSelect.Option value="neon" display="Neon Green" />
    </MultiSelect.OptGroup>
  </MultiSelect>
);

export default OptGroupExample;
