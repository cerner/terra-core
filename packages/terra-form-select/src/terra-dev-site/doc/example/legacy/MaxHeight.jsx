import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Select from 'terra-form-select/lib/Select';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <Select placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <Select.Option value="black" display="Black" />
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="brown" display="Brown" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
    <Select.Option value="white" display="White" />
    <Select.Option value="yellow" display="Yellow" />
  </Select>
);

export default MaxHeightExample;
