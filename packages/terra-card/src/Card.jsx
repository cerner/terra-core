import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import VisuallyHiddenText from 'terra-visually-hidden-text';
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
  /**
   * Text that describes the badge to a screen reader. Use this
   * if more information is needed to accurately describe
   * this card to screen reader users.
   */
  visuallyHiddenText: PropTypes.string,
};

const defaultProps = {
  variant: CardVariants.DEFAULT,
};

const Card = ({
  children,
  variant,
  visuallyHiddenText,
  ...customProps
}) => {
  const cardClassNames = cx([
    'card',
    variant,
    customProps.className,
  ]);

  const visuallyHiddenTextContent = visuallyHiddenText ? <VisuallyHiddenText text={visuallyHiddenText} /> : null;

  return (
    <article {...customProps} className={cardClassNames}>
      {visuallyHiddenTextContent}
      {children}
    </article>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.Body = CardBody;
export default Card;
