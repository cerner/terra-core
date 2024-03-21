import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from './Test.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div role="main">
    <div className={cx('truncated')}>
      Basic Test
      <Hyperlink id="basic-hyperlink1" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('truncated')}>
      <Hyperlink id="basic-hyperlink2" href="https://www.cerner.com" text="Default hyperlink that is really long and will get truncated" />
    </div>

    <div className={cx('truncated')}>
      External Test
      <Hyperlink id="external-hyperlink1" href="https://www.cerner.com" variant="external" text="External Hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('truncated')}>
      <Hyperlink id="external-hyperlink2" href="https://www.cerner.com" variant="external" text="External Hyperlink that is really long and will get truncated" />
    </div>

    <div className={cx('truncated')}>
      Button Test
      <Hyperlink id="button-hyperlink1" href="https://www.cerner.com" onClick={() => {}} text="Button Hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('truncated')}>
      <Hyperlink id="button-hyperlink2" href="https://www.cerner.com" onClick={() => {}} text="Button Hyperlink that is really long and will get truncated" />
    </div>

    <div className={cx('truncated')}>
      Document Test
      <Hyperlink id="document-hyperlink1" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Document Hyperlink that is really long and will get truncated" />
    </div>
    <div className={cx('truncated')}>
      <Hyperlink id="document-hyperlink2" href="https://www.cerner.com" onClick={() => {}} variant="document" text="Document Hyperlink that is really long and will get truncated" />
    </div>
  </div>
);
