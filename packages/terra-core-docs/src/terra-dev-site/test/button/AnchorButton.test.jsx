import React from 'react';
import classNames from 'classnames/bind';
import AnchorButton from 'terra-button';
import styles from './ButtonTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <AnchorButton href="#" text="I am rendered with an anchor tag" className={cx('button')} />
    <div className={cx('spacing')} />
  </div>
);
