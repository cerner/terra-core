import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchSelect from 'terra-form-select/lib/SearchSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <SearchSelect placeholder="Select a color" className={cx('form-select')}>
    <SearchSelect.OptGroup label="Shade of blue">
      <SearchSelect.Option value="blue" display="Blue" />
      <SearchSelect.Option value="cyan" display="Cyan" />
      <SearchSelect.Option value="teal" display="Teal" />
      <SearchSelect.Option value="azul" display="Azul" />
      <SearchSelect.Option value="aqua" display="Aqua" />
    </SearchSelect.OptGroup>
    <SearchSelect.OptGroup label="Shades of green">
      <SearchSelect.Option value="green" display="Green" />
      <SearchSelect.Option value="forest" display="Forest Green" />
      <SearchSelect.Option value="dark" display="Dark Green" />
      <SearchSelect.Option value="neon" display="Neon Green" />
    </SearchSelect.OptGroup>
  </SearchSelect>
);

export default OptGroupExample;
