import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const MaxHeight = () => (
  <div className={cx('content-wrapper')}>
  	<Select placeholder="Select a number" id="maxHeight" defaultValue="1" maxHeight={300}>
      <Select.Option value="1" display="One" />
      <Select.Option value="2" display="Two" />
      <Select.Option value="3" display="Three" />
      <Select.Option value="4" display="Four" />
      <Select.Option value="5" display="Five" />
      <Select.Option value="6" display="Six" />
      <Select.Option value="7" display="Seven" />
      <Select.Option value="8" display="Eight" />
      <Select.Option value="9" display="Nine" />
      <Select.Option value="10" display="Ten" />
      <Select.Option value="11" display="Eleven" />
      <Select.Option value="12" display="Twelve" />
      <Select.Option value="13" display="Thirteen" />
    </Select>
  </div>
);

export default MaxHeight;
