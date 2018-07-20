import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.module.scss';
import CardBody from './CardBody';

const cx = classNames.bind(styles);

const CardVariants = {
  DEFAULT: 'default',
  RAISED: 'raised',
};


const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * Sets the card variant to change the style for different use cases. One of `default`,  `raised`.
   */
  variant: PropTypes.oneOf([...Object.values(CardVariants)]),
};

const defaultProps = {
  variant: CardVariants.DEFAULT,
};

const Card = ({
  children,
  variant,
  ...customProps
}) => {
  const cardClassNames = cx([
    'card',
    variant,
    customProps.className,
  ]);

  return <div {...customProps} className={cardClassNames}>{children}</div>;
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.Body = CardBody;
export default Card;
