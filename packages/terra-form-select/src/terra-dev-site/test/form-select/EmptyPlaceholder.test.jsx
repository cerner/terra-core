import React from 'react';
import classNames from 'classnames/bind';
import Variants from '../../../shared/_variants';
import Select from '../../../SingleSelect';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const EmptyPlaceholder = () => (
  <div className={cx('content-wrapper')}>
    <Select placeholder="njjjjj" id="default">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
  </div>
);

export default EmptyPlaceholder;
