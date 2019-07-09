import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from '../../../../OverlayContainer';
import LoadingOverlay from '../../../../LoadingOverlay';
import styles from '../Overlay/OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <OverlayContainer
    className={cx('overlay-container1')}
    overlay={<LoadingOverlay isOpen isRelativeToContainer isAnimated id="terra-LoadingOverlay" />}
  />
);
