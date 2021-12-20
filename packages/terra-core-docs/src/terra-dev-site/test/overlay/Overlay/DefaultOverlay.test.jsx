import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Overlay from 'terra-overlay/lib/Overlay';
import styles from './OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

const OverlayExample = () => (
  <OverlayContainer className={cx('overlay-container1')} id="terra-OverlayContainer">
    <Overlay isOpen id="default-overlay" isRelativeToContainer />
  </OverlayContainer>
);

export default OverlayExample;
