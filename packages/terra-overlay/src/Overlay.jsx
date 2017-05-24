import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Overlay.scss';

const propTypes = {
 /*
 * The content to be displayed
 */
  content: PropTypes.node,
};

const defaultProps = {
  content: null,
};

const Overlay = ({ content, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const OverlayClassNames = classNames([
    'terra-Overlay',
    attributes.className,
  ]);

  return (
    <div className={OverlayClassNames} tabIndex="-1">
      <div className="terra-Overlay-content">
        {content}
      </div>
    </div>
  );
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
