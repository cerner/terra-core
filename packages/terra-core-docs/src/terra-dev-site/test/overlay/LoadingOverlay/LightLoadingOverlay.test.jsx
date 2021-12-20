import React from 'react';
import classNames from 'classnames/bind';
import OverlayContainer from 'terra-overlay/lib/OverlayContainer';
import LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';
import styles from '../Overlay/OverlayTestCommon.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <OverlayContainer
    className={cx('overlay-container1')}
    overlay={<LoadingOverlay isOpen backgroundStyle={LoadingOverlay.Opts.BackgroundStyles.LIGHT} isRelativeToContainer id="terra-LoadingOverlay" />}
  />
);
