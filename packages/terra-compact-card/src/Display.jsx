import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Display.scss';

const textStyles = [
  'secondary',
  'attention',
  'strikeThrough',
];

const propTypes = {
  /**
   * The text to be displayed for the comment.
   */
  text: PropTypes.string,
  /**
   * The visual styles to be applied to the display element.
   */
  textStyle: PropTypes.oneOf(textStyles),
  /**
   * Whether or not the text should be truncated.
   */
  isTruncated: PropTypes.bool,
  /**
   * The icon react element to be displayed next to the display text.
   */
  icon: PropTypes.element,
};

const defaultProps = {
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined,
};

const Display = ({
    text,
    textStyle,
    isTruncated,
    icon,
    ...customProps
  }) => {
  const displayClassNames = classNames([
    'terra-ClinicalItemView-display',
    customProps.className,
  ]);

  const textClassNames = classNames([
    'terra-ClinicalItemView-text',
    { 'terra-ClinicalItemView-text--isTruncated': isTruncated },
    { [`terra-ClinicalItemView-text--${textStyle}`]: textStyle },
  ]);

  let displayIcon;
  if (icon) {
    displayIcon = <div className="terra-ClinicalItemView-text--inlineIcon">{icon}</div>;
  }

  return (
    <div {...customProps} className={displayClassNames}>
      {displayIcon}
      <div className={textClassNames}>{text}</div>
    </div>
  );
};

Display.propTypes = propTypes;
Display.defaultProps = defaultProps;

export default Display;
