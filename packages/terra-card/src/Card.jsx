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
};

const Card = ({
  children,
  ...customProps
}) => {
  const cardClassNames = cx([
    'card',
    customProps.className,
  ]);

  return <div {...customProps} className={cardClassNames}>{children}</div>;
};

Card.propTypes = propTypes;
Card.Padding = CardPadding;
export default Card;
