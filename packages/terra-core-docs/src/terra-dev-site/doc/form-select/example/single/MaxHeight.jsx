import React from 'react';
import SingleSelect from 'terra-form-select/lib/SingleSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const MaxHeightExample = () => (
  <SingleSelect placeholder="Select a color" maxHeight={150} className={cx('form-select')}>
    <SingleSelect.Option value="black" display="Black" />
    <SingleSelect.Option value="blue" display="Blue" />
    <SingleSelect.Option value="brown" display="Brown" />
    <SingleSelect.Option value="green" display="Green" />
    <SingleSelect.Option value="purple" display="Purple" />
    <SingleSelect.Option value="red" display="Red" />
    <SingleSelect.Option value="violet" display="Violet" />
    <SingleSelect.Option value="white" display="White" />
    <SingleSelect.Option value="yellow" display="Yellow" />
  </SingleSelect>
);

export default MaxHeightExample;
