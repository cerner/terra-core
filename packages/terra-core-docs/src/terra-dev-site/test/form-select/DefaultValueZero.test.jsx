import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const DefaultValueZero = () => (
  <div className={cx('content-wrapper')}>
    <Select defaultValue={0} id="defaultValueZero">
      <Select.Option value={0} display="0" />
      <Select.Option value={1} display="1" />
      <Select.Option value={2} display="2" />
    </Select>
  </div>
);

export default DefaultValueZero;
