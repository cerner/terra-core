import React, { PropTypes } from 'react';
import ResponsiveElement from 'terra-responsive-element';

const propTypes = {
/**
 * The viewport the element will be responsive to, one of `window` or `parent`
 */
  responsiveTo: PropTypes.oneOf(['window', 'parent']),
};

const defaultProps = {
  responsiveTo: 'parent',
};

const Responsive = ({ responsiveTo }) => {
  const responsiveElement = (
    <ResponsiveElement
      responsiveTo={responsiveTo}
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
      );
  return (
    <div style={{ border: '1px dashed', width: '100%', marginTop: '10px', padding: '5px' }}>
      <div style={{ borderRight: '1px dashed', display: 'inline-block', width: '20%', padding: '5px' }}>
        {responsiveElement}
      </div>
      <div style={{ borderRight: '1px dashed', display: 'inline-block', width: '50%', padding: '5px' }}>
        {responsiveElement}
      </div>
      <div style={{ display: 'inline-block', width: '20%', padding: '5px' }}>
        {responsiveElement}
      </div>

    </div>
  );
};

Responsive.propTypes = propTypes;
Responsive.defaultProps = defaultProps;

export default Responsive;
