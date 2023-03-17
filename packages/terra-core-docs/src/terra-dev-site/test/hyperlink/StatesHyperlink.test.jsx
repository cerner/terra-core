import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from 'terra-hyperlink/lib/HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const HyperlinkStates = () => (
  <div role="main" className={cx('hyperlink-states')} id="link-example">
    <Hyperlink href="https://my.cerner.com/?">hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-visited')} text="visited hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-hovered')} text="hovered hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-focused')} text="focused hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-active')} text="active hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" variant="document" text="icon hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-visited')} variant="document" text="icon visited hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-hovered')} variant="document" text="icon hovered hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-focused')} variant="document" text="icon focused hyperlink" />
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-active')} variant="document" text="icon active hyperlink" />
  </div>
);

export default HyperlinkStates;
