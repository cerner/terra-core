import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from '../../../../OverlayContainer';
import Overlay from '../../../../Overlay';
import styles from './OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

const OverlayExample = () => (
  <OverlayContainer className={cx('overlay-container2')} id="overlay-container">
    <Overlay isOpen isRelativeToContainer isScrollable>
      <p>I</p>
      <p>am</p>
      <p>some</p>
      <p>very</p>
      <p>tall</p>
      <p>content</p>
      <p>in</p>
      <p>the</p>
      <p>overlay</p>
      <p>to</p>
      <p>prove</p>
      <p>that</p>
      <p>isScrollable</p>
      <p>works.</p>
    </Overlay>
  </OverlayContainer>
);

export default OverlayExample;
