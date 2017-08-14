import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Provides themeable 10px on top and bottom
   */
  padVertical: PropTypes.bool,
  /**
   * Provides themeable 10px on left and right
   */
  padHorizontal: PropTypes.bool,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {

};

const Card = ({
  padVertical,
  padHorizontal,
  children,
  ...customProps
}) => {
  const containerClass = cx([
    'card-container',
    { 'veritcal-padding': padVertical },
    { 'horizontal-padding': padHorizontal },
    customProps.className,
  ]);

  return (<div {...customProps} className={containerClass}> {children}</div>);
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
