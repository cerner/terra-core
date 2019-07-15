import React, { useRef } from 'react';
import classnames from 'classnames/bind';

import DropdownButton, { Item } from '../../../DropdownButton';
import styles from './ExtraSpacing.module.scss';

const cx = classnames.bind(styles);

export default () => {
  const first = useRef(null);
  return (
    <div className={cx('button-spacing-wrapper')}>
      <a href="/" ref={first} tabIndex="0">First</a>
      <DropdownButton label="Dropdown">
        <Item label="First" onClick={() => first.current.focus()} id="first" />
      </DropdownButton>
    </div>
  );
};
