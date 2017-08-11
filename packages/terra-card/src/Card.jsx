import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import './Card.scss';

const propTypes = {
  /**
   * Provides 10px on top and bottom
   */
  padVertical: PropTypes.bool,
  /**
   * Provides 10px on left and right
   */
  padHorizontal: PropTypes.bool,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  padVertical: true,
  padHorizontal: true,
};

const Card = ({
  padVertical,
  padHorizontal,
  children,
  ...customProps
}) => {
  // Follows these conventions https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
  let containerClass = 'card-container';
  const cardClass = classNames([
    'card',
    customProps.className,
  ]);

  if (padVertical) {
    containerClass += ' veritcalPadding';
  }
  if (padHorizontal) {
    containerClass += ' horizontalPadding';
  }


  const content = <div className={containerClass}> {children}</div>;

  return (
    <div {...customProps} className={cardClass}>
      {content}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
