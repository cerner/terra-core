import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './MultipleDefaultSelect.test.module.scss';

const cx = classNames.bind(styles);

const UncontrolledDefault = () => (
  <div className={cx('content-wrapper')}>
    <Select placeholder="Select a color" id="select-1">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
    </Select>
    <Select placeholder="Select a fruit" id="select-2">
      <Select.Option value="apple" display="Apple" />
      <Select.Option value="orange" display="Orange" />
      <Select.Option value="banana" display="Banana" />
    </Select>
  </div>
);

export default UncontrolledDefault;
