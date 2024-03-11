import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from './Test.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div role="main">
    <div className={cx('divtag')}>
      Basic Hyperlink
      <Hyperlink id="link" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      Basic Hyperlink
      <Hyperlink id="link" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      <Hyperlink id="link" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      <Hyperlink id="link" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      Basic Hyperlink
      <Hyperlink id="link" href="https://www.cerner.com" variant="external" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      Basic Hyperlink
      <Hyperlink id="link" href="https://www.cerner.com" variant="external" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      <Hyperlink id="link" href="https://www.cerner.com" variant="external" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      <Hyperlink id="link" href="https://www.cerner.com" variant="external" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      Button
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      Button
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      Button
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      Button
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag')}>
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('divtag2')}>
      <Hyperlink id="link" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Default hyperlink that is really long and will get truncated" />
    </div>
  </div>
);
