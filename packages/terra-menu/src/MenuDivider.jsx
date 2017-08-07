import React from 'react';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Menu.scss';

const cx = classNames.bind(styles);


const MenuDivider = () => (
  <hr className={cx(['divider'])} />
);

export default MenuDivider;
