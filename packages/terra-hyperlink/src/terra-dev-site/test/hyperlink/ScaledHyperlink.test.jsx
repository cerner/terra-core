import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from '../../../Hyperlink';
import styles from './HyperlinkTestCommon.scss';

const cx = classNames.bind(styles);

const ScaledHyperlink = () => (
  <div role="main" className={cx('scaled-hyperlink')} id="link-example">
    <Hyperlink href="https://www.cerner.com" variant="audio">Audio hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="document">Document hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="external">External hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="image">Image hyperlink</Hyperlink>
    <br />
    <Hyperlink href="https://www.cerner.com" variant="video">Video hyperlink</Hyperlink>
  </div>
);

export default ScaledHyperlink;
