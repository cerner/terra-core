import React, { PropTypes } from 'react';
import ResponsiveElement from 'terra-responsive-element';
import './AnimatedResponsiveElement.scss';

const propTypes = {
  /**
   * The viewport the element will be responsive to, one of `window` or `parent`
   */
  responsiveTo: PropTypes.oneOf(['window', 'parent']),
};

const defaultProps = {
  responsiveTo: 'parent',
};

const AnimatedResponsiveElement = ({ responsiveTo }) => (
  <div className="terra-AnimatedResponsiveElement">
    <ResponsiveElement
      responsiveTo={responsiveTo}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
      defaultElement={<div>Default</div>}
    />
  </div>
);

AnimatedResponsiveElement.propTypes = propTypes;
AnimatedResponsiveElement.defaultProps = defaultProps;

export default AnimatedResponsiveElement;
