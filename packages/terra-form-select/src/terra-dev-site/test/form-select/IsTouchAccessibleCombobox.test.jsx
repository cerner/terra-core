import React from 'react';
import classNames from 'classnames/bind';
import Combobox from '../../../Combobox';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const IsTouchAccessibleCombobox = () => (
  <div className={cx('content-wrapper')}>
    <Combobox placeholder="Select a color" id="combobox" isTouchAccessible>
      <Combobox.Option value="blue" display="Blue" />
      <Combobox.Option value="green" display="Green" />
      <Combobox.Option value="purple" display="Purple" />
      <Combobox.Option value="red" display="Red" />
      <Combobox.Option value="violet" display="Violet" />
    </Combobox>
    <p>Anim ad nulla est ipsum mollit mollit cillum consectetur.</p>
  </div>
);

export default IsTouchAccessibleCombobox;
