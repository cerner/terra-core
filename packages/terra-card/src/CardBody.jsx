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


const CardBody = ({
  children,
  hasPaddingVertical,
  hasPaddingHorizontal,
  ...customProps
}) => {
  const cardBodyClasses = cx([
    { 'veritcal-padding': hasPaddingVertical },
    { 'horizontal-padding': hasPaddingHorizontal },
    customProps.className,
  ]);
  return <div {...customProps} className={cardBodyClasses}>{children}</div>;
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
export default CardBody;
