import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from 'terra-hyperlink';
import styles from '../../../../../terra-hyperlink/src/HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const ScaledHyperlink = () => (
  <div role="main" className={cx('scaled-hyperlink')} id="link-example">
    <Hyperlink text="Audio hyperlink" href="https://www.cerner.com" variant="audio" />
    <br />
    <Hyperlink text="Document hyperlink" href="https://www.cerner.com" variant="document" />
    <br />
    <Hyperlink text="External hyperlink" href="https://www.cerner.com" variant="external" />
    <br />
    <Hyperlink text="Image hyperlink" href="https://www.cerner.com" variant="image" />
    <br />
    <Hyperlink text="Video hyperlink" href="https://www.cerner.com" variant="video" />
  </div>
);

export default ScaledHyperlink;
