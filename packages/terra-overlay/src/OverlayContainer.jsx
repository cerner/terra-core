import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Overlay.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /**
 * The overlay and the elements the overlay should hide when overlay isRelativeToContainer and isOpen.
 */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const OverlayContainer = ({ children, ...customProps }) => {
  const OverlayContainerClassNames = cx([
    'overlay-container',
    customProps.className,
  ]);

  return (
    <div className={OverlayContainerClassNames} tabIndex="-1" {...customProps} >
      {children}
    </div>
  );
};

OverlayContainer.propTypes = propTypes;
OverlayContainer.defaultProps = defaultProps;

export default OverlayContainer;
