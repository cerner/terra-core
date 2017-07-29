import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import styles from './Slide.scss';

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
  <div className={styles.slide} aria-hidden={props.isHidden || null}>
    <div className={styles['slide-shadow']} />
    {props.children}
  </div>
);

Slide.propTypes = propTypes;
Slide.defaultProps = defaultProps;

export default Slide;
