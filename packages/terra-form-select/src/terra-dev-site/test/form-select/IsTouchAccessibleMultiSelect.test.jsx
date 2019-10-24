import React from 'react';
import classNames from 'classnames/bind';
import MultiSelect from '../../../MultiSelect';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleMultiSelect = () => (
  <div className={cx('content-wrapper')}>
    <MultiSelect placeholder="Select a color" id="multiple" isTouchAccessible>
      <MultiSelect.Option value="blue" display="Blue" />
      <MultiSelect.Option value="green" display="Green" />
      <MultiSelect.Option value="purple" display="Purple" />
      <MultiSelect.Option value="red" display="Red" />
      <MultiSelect.Option value="violet" display="Violet" />
    </MultiSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default IsTouchAccessibleMultiSelect;
