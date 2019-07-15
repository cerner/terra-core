import React, { useRef } from 'react';
import classnames from 'classnames/bind';

import SplitButton, { Item } from '../../../SplitButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => {
  const first = useRef(null);
  const second = useRef(null);
  return (
    <div className={cx('button-spacing-wrapper')}>
      <a href="/" ref={first} tabIndex="0">First</a>
      <a href="/" ref={second} tabIndex="0">Second</a>
      <SplitButton primaryOptionLabel="First" onClick={() => first.current.focus()}>
        <Item label="Second" onClick={() => second.current.focus()} id="second" />
      </SplitButton>
    </div>
  );
};
