import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

import './Slide.scss';

const propTypes = {
  /**
   * If true, the Slide is marked as hidden using accessiblity attributes.
   */
  isHidden: PropTypes.bool,

  /**
   * The components to display inside the Slide.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isHidden: false,
};

const Slide = props => (
  <div className="terraClinical-Slide" aria-hidden={props.isHidden || null}>
    <div className="terraClinical-Slide-shadow" />
    {props.children}
  </div>
);

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
