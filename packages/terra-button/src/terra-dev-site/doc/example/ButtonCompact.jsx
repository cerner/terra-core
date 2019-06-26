import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Button from 'terra-button/lib/Button';
import classNames from 'classnames/bind';
import styles from './ButtonDocCommon.module.scss';

const cx = classNames.bind(styles);

const ButtonCompact = () => (
  <div>
    <Button text="Neutral Standard" className={cx('button')} />
    <Button text="Neutral Compact" isCompact className={cx('button')} />
    <Button text="Emphasis Standard" variant="emphasis" className={cx('button')} />
    <Button text="Emphasis Compact" variant="emphasis" isCompact className={cx('button')} />
  </div>
);

export default ButtonCompact;
