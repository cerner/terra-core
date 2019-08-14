import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SearchSelect from 'terra-form-select/lib/SearchSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <SearchSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <SearchSelect.Option value="black" display="Black" />
    <SearchSelect.Option value="blue" display="Blue" />
    <SearchSelect.Option value="brown" display="Brown" />
    <SearchSelect.Option value="green" display="Green" />
    <SearchSelect.Option value="purple" display="Purple" />
    <SearchSelect.Option value="red" display="Red" />
    <SearchSelect.Option value="violet" display="Violet" />
    <SearchSelect.Option value="white" display="White" />
    <SearchSelect.Option value="yellow" display="Yellow" />
  </SearchSelect>
);

export default MaxHeightExample;
