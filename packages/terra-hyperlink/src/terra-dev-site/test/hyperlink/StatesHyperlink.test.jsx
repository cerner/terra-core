import React from 'react';
import classNames from 'classnames/bind';
import Hyperlink from '../../../Hyperlink';
import styles from './HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const HyperlinkStates = () => (
  <div role="main" className={cx('hyperlink-states')} id="link-example">
    <Hyperlink href="https://my.cerner.com/?">hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-visited')}>visited hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-hovered')}>hovered hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-focused')}>focused hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-active')}>active hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" variant="document">icon hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-visited')} variant="document">icon visited hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-hovered')} variant="document">icon hovered hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-focused')} variant="document">icon focused hyperlink</Hyperlink>
    <br />
    <br />
    <Hyperlink href="https://my.cerner.com/?" className={cx('is-active')} variant="document">icon active hyperlink</Hyperlink>
  </div>
);

export default HyperlinkStates;
