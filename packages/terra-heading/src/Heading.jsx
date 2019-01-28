import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Heading.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable quote-props */
const HeadingLevel = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
};

const HeadingSize = {
  MINI: 'mini',
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const HeadingWeight = {
  '200': 200,
  '400': 400,
  '700': 700,
};
/* eslint-enable quote-props */

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  /**
   * Sets the text to display in italics.
   */
  isItalic: PropTypes.bool,
  /**
   * Sets the text to appear visually hidden. The text will still be available to screen readers.
   */
  isVisuallyHidden: PropTypes.bool,
  /**
   * Sets the text size. One of `mini`, `tiny`, `small`, `medium`, `large`, `huge`.
   */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Sets the text size. One of `200`, `400`, `700`.
   */
  weight: PropTypes.oneOf([200, 400, 700]),
};

const defaultProps = {
  isItalic: false,
  isVisuallyHidden: false,
  weight: 700,
};

const Heading = ({
  level, children, isVisuallyHidden, isItalic, size, weight, ...customProps
}) => {
  const attributes = Object.assign({}, customProps);
  const TextClassNames = cx([
    'heading',
    { italic: isItalic },
    { 'visually-hidden': isVisuallyHidden },
    { [`level-${level}`]: level },
    { [`size-${size}`]: size },
    { [`weight-${weight}`]: weight },
    attributes.className,
  ]);

  const Element = `h${level}`;

  return (
    <Element {...attributes} style={{ ...customProps.style }} className={TextClassNames}>
      {children}
    </Element>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
export { HeadingLevel, HeadingSize, HeadingWeight };
