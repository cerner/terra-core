import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Card.scss';
import CardBody from './CardBody';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * An option used in order to change to a different style of card for different use cases
   */
  variant: PropTypes.oneOf(['default', 'raised']),
};

const defaultProps = {
  variant: 'default',
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
