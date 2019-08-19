import React from 'react';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const AllowClearExample = () => (
  <SingleSelect placeholder="Select a color" allowClear className={cx('form-select')}>
    <SingleSelect.Option value="blue" display="Blue" />
    <SingleSelect.Option value="green" display="Green" />
    <SingleSelect.Option value="purple" display="Purple" />
    <SingleSelect.Option value="red" display="Red" />
    <SingleSelect.Option value="violet" display="Violet" />
  </SingleSelect>
);

export default AllowClearExample;
