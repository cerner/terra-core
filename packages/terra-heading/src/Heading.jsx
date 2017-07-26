import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Heading.scss';

const cx = classNames.bind(styles);

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
   * The color of the text. Accepts any color value parseable by CSS.
   */
  color: PropTypes.string,
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
  color: 'inherit',
  isItalic: false,
  isVisuallyHidden: false,
  weight: 700,
};

const Heading = ({ level, color, children, isVisuallyHidden, isItalic, size, weight, ...customProps }) => {
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

  const headingStyles = {
    color,
  };

  const Element = `h${level}`;

  return (
    <Element {...attributes} style={{ ...headingStyles, ...customProps.style }} className={TextClassNames} >
      {children}
    </Element>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
