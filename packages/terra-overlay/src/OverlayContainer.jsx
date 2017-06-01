import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Overlay.scss';

const propTypes = {
 /**
 * The overlay and elements to be displayed
 */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const OverlayContainer = ({ children, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const OverlayContainerClassNames = classNames([
    'terra-OverlayContainer',
    attributes.className,
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
