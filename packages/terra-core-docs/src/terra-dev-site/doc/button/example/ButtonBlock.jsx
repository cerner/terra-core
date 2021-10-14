import React from 'react';
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonBlock = () => (
  <Button text="Neutral Block" isBlock className={cx('button')} />
);

export default ButtonBlock;
