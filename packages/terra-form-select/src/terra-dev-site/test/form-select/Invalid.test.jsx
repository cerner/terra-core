import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './Select.test.module.scss';

const cx = classNames.bind(styles);

const InvalidDefault = () => (
  <div className={cx('content-wrapper')}>
    <Select required isInvalid placeholder="Select a color" id="default" defaultValue="green">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
  </div>
);

export default InvalidDefault;
