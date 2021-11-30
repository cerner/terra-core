import React from 'react';
import TagSelect from 'terra-form-select/lib/TagSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const OptGroupExample = () => (
  <TagSelect placeholder="Select a color" className={cx('form-select')}>
    <TagSelect.OptGroup label="Shade of blue">
      <TagSelect.Option value="blue" display="Blue" />
      <TagSelect.Option value="cyan" display="Cyan" />
      <TagSelect.Option value="teal" display="Teal" />
      <TagSelect.Option value="azul" display="Azul" />
      <TagSelect.Option value="aqua" display="Aqua" />
    </TagSelect.OptGroup>
    <TagSelect.OptGroup label="Shades of green">
      <TagSelect.Option value="green" display="Green" />
      <TagSelect.Option value="forest" display="Forest Green" />
      <TagSelect.Option value="dark" display="Dark Green" />
      <TagSelect.Option value="neon" display="Neon Green" />
    </TagSelect.OptGroup>
  </TagSelect>
);

export default OptGroupExample;
