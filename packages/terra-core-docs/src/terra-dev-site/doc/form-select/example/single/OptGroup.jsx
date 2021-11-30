import React from 'react';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <SingleSelect placeholder="Select a color" className={cx('form-select')}>
    <SingleSelect.OptGroup label="Shade of blue">
      <SingleSelect.Option value="blue" display="Blue" />
      <SingleSelect.Option value="cyan" display="Cyan" />
      <SingleSelect.Option value="teal" display="Teal" />
      <SingleSelect.Option value="azul" display="Azul" />
      <SingleSelect.Option value="aqua" display="Aqua" />
    </SingleSelect.OptGroup>
    <SingleSelect.OptGroup label="Shades of green">
      <SingleSelect.Option value="green" display="Green" />
      <SingleSelect.Option value="forest" display="Forest Green" />
      <SingleSelect.Option value="dark" display="Dark Green" />
      <SingleSelect.Option value="neon" display="Neon Green" />
    </SingleSelect.OptGroup>
  </SingleSelect>
);

export default OptGroupExample;
