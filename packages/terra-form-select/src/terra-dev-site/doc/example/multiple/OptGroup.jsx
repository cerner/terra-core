import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import MultipleSelect from 'terra-form-select/lib/MultipleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <MultipleSelect placeholder="Select a color" className={cx('form-select')}>
    <MultipleSelect.OptGroup label="Shade of blue">
      <MultipleSelect.Option value="blue" display="Blue" />
      <MultipleSelect.Option value="cyan" display="Cyan" />
      <MultipleSelect.Option value="teal" display="Teal" />
      <MultipleSelect.Option value="azul" display="Azul" />
      <MultipleSelect.Option value="aqua" display="Aqua" />
    </MultipleSelect.OptGroup>
    <MultipleSelect.OptGroup label="Shades of green">
      <MultipleSelect.Option value="green" display="Green" />
      <MultipleSelect.Option value="forest" display="Forest Green" />
      <MultipleSelect.Option value="dark" display="Dark Green" />
      <MultipleSelect.Option value="neon" display="Neon Green" />
    </MultipleSelect.OptGroup>
  </MultipleSelect>
);

export default OptGroupExample;
