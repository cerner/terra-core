import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonBlockLeftAligned = () => (
  <Button text="Neutral Block" isBlock isLeftAligned className={cx('button')} />
);

export default ButtonBlockLeftAligned;
