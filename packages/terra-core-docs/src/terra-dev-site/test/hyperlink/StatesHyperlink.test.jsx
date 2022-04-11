import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from '../../../../../terra-hyperlink/src/HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const HyperlinkStates = () => (
  <div role="main" className={cx('hyperlink-states')} id="link-example">
    <Hyperlink text="hyperlink" href="https://my.cerner.com/?" />
    <br />
    <br />
    <Hyperlink text="visited hyperlink" href="https://my.cerner.com/?" className={cx('is-visited')} />
    <br />
    <br />
    <Hyperlink text="hovered hyperlink" href="https://my.cerner.com/?" className={cx('is-hovered')} />
    <br />
    <br />
    <Hyperlink text="focused hyperlink" href="https://my.cerner.com/?" className={cx('is-focused')} />
    <br />
    <br />
    <Hyperlink text="active hyperlink" href="https://my.cerner.com/?" className={cx('is-active')} />
    <br />
    <br />
    <Hyperlink text="icon hyperlink" href="https://my.cerner.com/?" variant="document" />
    <br />
    <br />
    <Hyperlink text="icon visited hyperlink" href="https://my.cerner.com/?" className={cx('is-visited')} variant="document" />
    <br />
    <br />
    <Hyperlink text="icon hovered hyperlink" href="https://my.cerner.com/?" className={cx('is-hovered')} variant="document" />
    <br />
    <br />
    <Hyperlink text="icon focused hyperlink" href="https://my.cerner.com/?" className={cx('is-focused')} variant="document" />
    <br />
    <br />
    <Hyperlink text="icon active hyperlink" href="https://my.cerner.com/?" className={cx('is-active')} variant="document" />
  </div>
);

export default HyperlinkStates;
