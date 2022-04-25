import React from 'react';
import classNames from 'classnames/bind';
import HyperlinkButton from 'terra-hyperlink/lib/HyperlinkButton';
import styles from '../../../../../../terra-hyperlink/src/HyperlinkTestCommon.module.scss';

const cx = classNames.bind(styles);

const HyperlinkButtonStates = () => (
  <div role="main" className={cx('hyperlink-states')} id="link-example">
    <HyperlinkButton text="hyperlink" onClick={() => {}} />
    <br />
    <br />
    <HyperlinkButton text="visited hyperlink" onClick={() => {}} className={cx('is-visited')} />
    <br />
    <br />
    <HyperlinkButton text="hovered hyperlink" onClick={() => {}} className={cx('is-hovered')} />
    <br />
    <br />
    <HyperlinkButton text="focused hyperlink" onClick={() => {}} className={cx('is-focused')} />
    <br />
    <br />
    <HyperlinkButton text="active hyperlink" onClick={() => {}} className={cx('is-active')} />
    <br />
    <br />
    <HyperlinkButton text="icon hyperlink" onClick={() => {}} variant="document" />
    <br />
    <br />
    <HyperlinkButton text="icon visited hyperlink" onClick={() => {}} className={cx('is-visited')} variant="document" />
    <br />
    <br />
    <HyperlinkButton text="icon hovered hyperlink" onClick={() => {}} className={cx('is-hovered')} variant="document" />
    <br />
    <br />
    <HyperlinkButton text="icon focused hyperlink" onClick={() => {}} className={cx('is-focused')} variant="document" />
    <br />
    <br />
    <HyperlinkButton text="icon active hyperlink" onClick={() => {}} className={cx('is-active')} variant="document" />
  </div>
);

export default HyperlinkButtonStates;
