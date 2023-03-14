import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from 'terra-hyperlink/lib/HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const ScaledHyperlink = () => (
  <div role="main" className={cx('scaled-hyperlink')} id="link-example">
    <Hyperlink href="https://www.cerner.com" variant="audio" text="Audio hyperlink" />
    <br />
    <Hyperlink href="https://www.cerner.com" variant="document" text="Document hyperlink" />
    <br />
    <Hyperlink href="https://www.cerner.com" variant="external" text="External hyperlink" />
    <br />
    <Hyperlink href="https://www.cerner.com" variant="image" text="Image hyperlink" />
    <br />
    <Hyperlink href="https://www.cerner.com" variant="video" text="Video hyperlink" />
  </div>
);

export default ScaledHyperlink;
