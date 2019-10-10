import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const UncontrolledDefault = () => (
  <div className={cx('content-wrapper')}>
  	<Select placeholder="Select a color" id="default" defaultValue="lorem">
      <Select.Option value="lorem" display="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" />
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
  </div>
);

export default UncontrolledDefault;
