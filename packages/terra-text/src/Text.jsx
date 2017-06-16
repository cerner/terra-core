import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Text.scss';

const propTypes = {
  /**
   * Child nodes
   */
  children: PropTypes.node.isRequired,
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
   * Sets the text size. One of 10, 12, 14, 16, 18, 20, 24, 32, 100.
   */
  fontSize: PropTypes.oneOf([10, 12, 14, 16, 18, 20, 24, 32, 100]),
  /**
   * Sets the text size. One of 200, 400, 700.
   */
  weight: PropTypes.oneOf([200, 400, 700]),
};

const defaultProps = {
  color: 'inherit',
  isItalic: false,
  isVisuallyHidden: false,
};

const Text = ({ color, children, isVisuallyHidden, isItalic, fontSize, weight, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const TextClassNames = classNames([
    'terra-Text',
    { 'terra-Text--italic': isItalic },
    { 'terra-Text--visually-hidden': isVisuallyHidden },
    { [`terra-Text--fontSize-${fontSize}`]: fontSize },
    { [`terra-Text--weight-${weight}`]: weight },
    attributes.className,
  ]);

  const textStyles = {
    color,
  };

  return (
    <span {...attributes} style={{ ...textStyles, ...customProps.style }} className={TextClassNames} >
      {children}
    </span>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
