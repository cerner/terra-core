import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleBottom = () => (
  <div className={cx('bottom-left')}>
    <Select isTouchAccessible placeholder="Select a color" variant="tag" id="tag">
      <Select.Option value="blue" display="Blue" />
      <Select.Option value="green" display="Green" />
      <Select.Option value="purple" display="Purple" />
      <Select.Option value="red" display="Red" />
      <Select.Option value="violet" display="Violet" />
    </Select>
    <button type="button" id="focusable">Focusable</button>
  </div>
);

export default IsTouchAccessibleBottom;
