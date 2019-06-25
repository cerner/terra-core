import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Select from 'terra-form-select/lib/Select';
import classNames from 'classnames/bind';
import styles from './FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledExample = () => (
  <Select placeholder="Select a color" disabled className={cx('form-select')} defaultValue="blue">
    <Select.Option value="blue" display="Blue" />
    <Select.Option value="green" display="Green" />
    <Select.Option value="purple" display="Purple" />
    <Select.Option value="red" display="Red" />
    <Select.Option value="violet" display="Violet" />
  </Select>
);

export default DisabledExample;
