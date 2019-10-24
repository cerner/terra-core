import React from 'react';
import classNames from 'classnames/bind';
import TagSelect from '../../../TagSelect';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleTagSelect = () => (
  <div className={cx('content-wrapper')}>
    <TagSelect placeholder="Select a color" id="tag" isTouchAccessible>
      <TagSelect.Option value="blue" display="Blue" />
      <TagSelect.Option value="green" display="Green" />
      <TagSelect.Option value="purple" display="Purple" />
      <TagSelect.Option value="red" display="Red" />
      <TagSelect.Option value="violet" display="Violet" />
    </TagSelect>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default IsTouchAccessibleTagSelect;
