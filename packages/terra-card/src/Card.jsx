import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';
import CardPadding from './CardPadding';

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
  hasPaddingVertical: false,
  hasPaddingHorizontal: false,
};

const Card = ({
  children,
  hasPaddingVertical,
  hasPaddingHorizontal,
  ...customProps
}) => {
  const cardClassNames = cx([
    'card',
    customProps.className,
    { 'veritcal-padding': hasPaddingVertical },
    { 'horizontal-padding': hasPaddingHorizontal },
  ]);

  return <div {...customProps} className={cardClassNames}>{children}</div>;
};

Card.propTypes = propTypes;
Card.Padding = CardPadding;
Card.defaultProps = defaultProps;
export default Card;
