import React from 'react';
import classNames from 'classnames/bind';
import SearchSelect from '../../../SearchSelect';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleSearchSelect = () => (
  <div className={cx('content-wrapper')}>
    <SearchSelect placeholder="Select a color" id="search" isTouchAccessible>
      <SearchSelect.Option value="blue" display="Blue" />
      <SearchSelect.Option value="green" display="Green" />
      <SearchSelect.Option value="purple" display="Purple" />
      <SearchSelect.Option value="red" display="Red" />
      <SearchSelect.Option value="violet" display="Violet" />
    </SearchSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default IsTouchAccessibleSearchSelect;
