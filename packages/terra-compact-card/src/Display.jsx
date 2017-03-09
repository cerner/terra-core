import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './compact-card-display.scss';

const textStyles = [
  'secondary',
  'attention',
  'strikeThrough',
];

const propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  textStyle: PropTypes.oneOf(textStyles),
  isTruncated: PropTypes.bool,
  icon: PropTypes.element,
};

const defaultProps = {
  className: '',
  text: '',
  textStyle: undefined,
  isTruncated: false,
  icon: undefined,
};

const Display = ({
    className,
    text,
    textStyle,
    isTruncated,
    icon,
    ...customProps
  }) => {
  const displayClassNames = classNames([
    'terra-CompactCard-display',
    className,
  ]);

  const textClassNames = classNames([
    'terra-CompactCard-text',
    { 'terra-CompactCard-text--isTruncated': isTruncated },
    { [`terra-CompactCard-text--${textStyle}`]: textStyle },
  ]);

  let displayIcon;
  if (icon) {
    displayIcon = <div className="terra-CompactCard-text--inlineIcon">{icon}</div>;
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
