import React from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonVariant = () => (
  <div>
    <Button text="Neutral" className={cx('button')} />
    <Button text="Emphasis" variant="emphasis" className={cx('button')} />
    <Button text="Ghost" variant="ghost" className={cx('button')} />
    <Button text="De-emphasis" variant="de-emphasis" className={cx('button')} />
    <Button text="Action" variant="action" className={cx('button')} />
  </div>
);

export default ButtonVariant;
