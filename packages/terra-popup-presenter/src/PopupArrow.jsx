import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretLeft from 'terra-icon/lib/icon/IconCaretLeft';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import './PopupArrow.scss';

const arrowDirections = [
  'Top',
  'Bottom',
  'Start',
  'End',
];

const propTypes = {
  /**
   * The direction of the arrow image.
   */
  direction: PropTypes.oneOf(arrowDirections),
};

const defaultProps = {
  direction: 'Top',
};

const PopupArrow = ({
    direction,
    ...customProps
  }) => {
  const arrowClassNames = classNames([
    'terra-PopupArrow',
    customProps.className,
  ]);

  let arrow;
  if (direction === 'Bottom') {
    arrow = <IconCaretDown height="30" width="30" />;
  } else if (direction === 'Start') {
    arrow = <IconCaretLeft height="30" width="30" />;
  } else if (direction === 'End') {
    arrow = <IconCaretRight height="30" width="30" />;
  } else {
    arrow = <IconCaretUp height="30" width="30" />;
  }

  return (
    <div {...customProps} className={arrowClassNames}>
      {arrow}
    </div>
  );
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;

export default PopupArrow;
