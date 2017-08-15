import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';


const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * Provides 10px of themeable padding vertical
   */
  hasPaddingVertical: PropTypes.bool,
  /**
   * Provides 10px of themeable padding horizontal
   */
  hasPaddingHorizontal: PropTypes.bool,
};

const defaultProps = {
  hasPaddingHorizontal: false,
  hasPaddingVertical: false,
};


const CardPadding = ({
  children,
  hasPaddingVertical,
  hasPaddingHorizontal,
  ...customProps
}) => {
  const cardPaddingClasses = cx([
    { 'veritcal-padding': hasPaddingVertical },
    { 'horizontal-padding': hasPaddingHorizontal },
    customProps.className,
  ]);
  return <div {...customProps} className={cardPaddingClasses}>{children}</div>;
};

CardPadding.propTypes = propTypes;
CardPadding.defaultProps = defaultProps;
export default CardPadding;
