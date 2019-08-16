import React from 'react';
import SearchSelect from 'terra-form-select/lib/SearchSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledExample = () => (
  <SearchSelect placeholder="Select a color" disabled className={cx('form-select')} defaultValue="blue">
    <SearchSelect.Option value="blue" display="Blue" />
    <SearchSelect.Option value="green" display="Green" />
    <SearchSelect.Option value="purple" display="Purple" />
    <SearchSelect.Option value="red" display="Red" />
    <SearchSelect.Option value="violet" display="Violet" />
  </SearchSelect>
);

export default DisabledExample;
