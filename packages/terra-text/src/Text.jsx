import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Text.module.scss';

const cx = classNamesBind.bind(styles);

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
   * Sets the text to display in italics.
   */
  isItalic: PropTypes.bool,
  /**
   * Sets the text to appear visually hidden. The text will still be available to screen readers.
   */
  isVisuallyHidden: PropTypes.bool,
  /**
   * Indicates if word wrapping styles should be applied.
   */
  isWordWrapped: PropTypes.bool,
  /**
   * Sets the text size. One of `10`, `12`, `14`, `16`, `18`, `20`, `24`, `32`, `36`, `46`, `50`, `56`, `64`, `72`, `92`, `100`.
   */
  fontSize: PropTypes.oneOf([10, 12, 14, 16, 18, 20, 24, 32, 36, 46, 50, 56, 64, 72, 92, 100]),
  /**
   * The prop can be used to specify the weight or boldness of the Text component. One of `200`, `300`, `400`, `700`.
   */
  weight: PropTypes.oneOf([200, 300, 400, 700]),
  /**
   * Sets an author defined class, to control the colors of the text and override the base color styles.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/blue?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  colorClass: PropTypes.string,
};

const defaultProps = {
  isItalic: false,
  isVisuallyHidden: false,
  isWordWrapped: false,
};

const Text = ({
  children, isVisuallyHidden, isItalic, fontSize, weight, isWordWrapped, colorClass, ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  const attributes = { ...customProps };
  const TextClassNames = classNames(
    cx([
      'text',
      { 'inherit-color': !colorClass }, // set `color: inherit` via class if colorClass is not provided
      { italic: isItalic },
      { 'word-wrap': isWordWrapped },
      { 'visually-hidden': isVisuallyHidden },
      { [`font-size-${fontSize}`]: fontSize },
      { [`font-weight-${weight}`]: weight },
      colorClass,
      theme.className,
    ]),
    attributes.className,
  );

  const descriptiveClasses = classNames(
    cx([
      'text',
      { 'visually-hidden': true },
    ]),
    attributes.className,
  );

  const isValidDate = moment(children, 'MM/DD/YYYY', true).isValid();
  const dateParts = isValidDate ? children.split('/') : [null, null, null];
  const monthVal = dateParts[0];
  const dayVal = dateParts[1];
  const yearVal = dateParts[2];

  const isValidTime = moment(children, 'hh:mm:ss', true).isValid();
  const timeParts = isValidTime ? children.split(':') : [null, null, null];
  const hourVal = timeParts[0];
  const minuteVal = timeParts[1];
  const secondVal = timeParts[2];

  return (
    <span {...attributes} className={TextClassNames}>
      {isValidDate
        ? (<>
          <span className={descriptiveClasses}>Month</span>
          <React.Fragment>{monthVal}/</React.Fragment>

          <span className={descriptiveClasses}>Day</span>
          <React.Fragment>{dayVal}/</React.Fragment>

          <span className={descriptiveClasses}>Year</span>
          <React.Fragment>{yearVal}</React.Fragment>
        </>) : isValidTime
        ? (<>
          <span className={descriptiveClasses}>Hour</span>
          <React.Fragment>{hourVal}:</React.Fragment>

          <span className={descriptiveClasses}>Minute</span>
          <React.Fragment>{minuteVal}:</React.Fragment>

          <span className={descriptiveClasses}>Second</span>
          <React.Fragment>{secondVal}</React.Fragment>
        </>) : children}
    </span>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
export { TextFontSize, TextWeight };
