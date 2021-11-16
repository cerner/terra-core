import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './MultipleDefaultSelect.test.module.scss';

const cx = classNames.bind(styles);

const UncontrolledDefault = () => (
  <div className={cx('content-wrapper')}>
    <Select placeholder="Select a color" className={cx('left-select')}>
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
    </Select>
    <Select placeholder="Select a fruit" className={cx('right-select')}>
      <Select.Option value="apple" display="Apple" />
      <Select.Option value="orange" display="Orange" />
      <Select.Option value="banana" display="Banana" />
    </Select>
  </div>
);

export default UncontrolledDefault;
