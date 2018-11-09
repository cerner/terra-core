import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Text.module.scss';

const cx = classNames.bind(styles);

/* eslint-disable quote-props */
const TextFontSize = {
  '10': 10,
  '12': 12,
  '14': 14,
  '16': 16,
  '18': 18,
  '20': 20,
  '24': 24,
  '32': 32,
  '36': 36,
  '46': 46,
  '50': 50,
  '56': 56,
  '64': 64,
  '72': 72,
  '92': 92,
  '100': 100,
};

const TextWeight = {
  '200': 200,
  '300': 300,
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
   * Sets the text size. One of `10`, `12`, `14`, `16`, `18`, `20`, `24`, `32`, `36`, `46`, `50`, `56`, `64`, `72`, `92`, `100`.
   */
  fontSize: PropTypes.oneOf([10, 12, 14, 16, 18, 20, 24, 32, 36, 46, 50, 56, 64, 72, 92, 100]),
  /**
   * Sets the text size. One of `200`, `300`, `400`, `700`.
   */
  weight: PropTypes.oneOf([200, 300, 400, 700]),
};

const defaultProps = {
  color: 'inherit',
  isItalic: false,
  isVisuallyHidden: false,
};

const Text = ({
  color, children, isVisuallyHidden, isItalic, fontSize, weight, ...customProps
}) => {
  const attributes = Object.assign({}, customProps);
  const TextClassNames = cx([
    'text',
    { italic: isItalic },
    { 'visually-hidden': isVisuallyHidden },
    { [`font-size-${fontSize}`]: fontSize },
    { [`font-weight-${weight}`]: weight },
    attributes.className,
  ]);

  const textStyles = {
    color,
  };

  return (
    <span {...attributes} style={{ ...textStyles, ...customProps.style }} className={TextClassNames}>
      {children}
    </span>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
export { TextFontSize, TextWeight };
