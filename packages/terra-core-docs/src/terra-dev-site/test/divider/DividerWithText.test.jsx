import React from 'react';
import classNames from 'classnames/bind';
import Divider from 'terra-divider';
import styles from './DividerTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <div className={cx('separator')} />
    <Divider id="divider" text="Custom Divider Text" />
    <div className={cx('separator')} />
    <Divider id="divider1" text="Section Divider H1 Text" level={1} />
    <div className={cx('separator')} />
    <Divider id="divider2" text="Section Divider H2 Text" level={2} />
    <div className={cx('separator')} />
    <Divider id="divider3" text="Section Divider H3 Text" level={3} />
    <div className={cx('separator')} />
    <Divider id="divider4" text="Section Divider H4 Text" level={4} />
    <div className={cx('separator')} />
    <Divider id="divider5" text="Section Divider H5 Text" level={5} />
    <div className={cx('separator')} />
    <Divider id="divider6" text="Section Divider H6 Text" level={6} />
    <div className={cx('separator')} />
  </div>
);
