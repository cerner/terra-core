import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardBody.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child Nodes
   */
  children: PropTypes.node,
  /**
   * Provides themeable padding vertical
   */
  hasPaddingVertical: PropTypes.bool,
  /**
   * Provides themeable padding horizontal
   */
  hasPaddingHorizontal: PropTypes.bool,
  /**
  * Sets the content of the card to be centered
  */
  isContentCentered: PropTypes.bool,
};

const defaultProps = {
  hasPaddingHorizontal: true,
  hasPaddingVertical: true,
  isContentCentered: false,
};

const CardBody = ({
  children,
  hasPaddingVertical,
  hasPaddingHorizontal,
  isContentCentered,
  ...customProps
}) => {
  const cardBodyClasses = cx([
    { 'vertical-padding': hasPaddingVertical },
    { 'horizontal-padding': hasPaddingHorizontal },
    { 'center-content': isContentCentered },
    customProps.className,
  ]);
  return <div {...customProps} className={cardBodyClasses}>{children}</div>;
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
export default CardBody;
