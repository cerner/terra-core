import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import Overlay from 'terra-overlay/lib/Overlay';
import styles from './OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

const OverlayComponent = () => (
  <Overlay isOpen isRelativeToContainer backgroundStyle={Overlay.Opts.BackgroundStyles.LIGHT} id="light-overlay">
    <h1>Light Overlay</h1>
  </Overlay>
);

const OverlayExample = () => (
  <OverlayContainer className={cx('overlay-container1')} id="terra-OverlayContainer" overlay={<OverlayComponent />} />
);

export default OverlayExample;
