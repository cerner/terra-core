import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Overlay.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * The Overlay and the content to be displayed within the overlay.
  */
  overlay: PropTypes.node,
  /**
  * The elements the overlay should hide when overlay isRelativeToContainer and isOpen.
  */
  children: PropTypes.node,
};

const defaultProps = {
  overlay: null,
  children: null,
};

const OverlayContainer = ({ overlay, children, ...customProps }) => {
  const OverlayContainerClassNames = cx([
    'overlay-container',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={OverlayContainerClassNames} tabIndex="-1">
      {overlay}
      {children}
    </div>
  );
};

OverlayContainer.propTypes = propTypes;
OverlayContainer.defaultProps = defaultProps;

export default OverlayContainer;
