import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretLeft from 'terra-icon/lib/icon/IconCaretLeft';
import IconCaretUp from 'terra-icon/lib/icon/IconCaretUp';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';
import './PopupArrow.scss';

const arrowPositions = [
  'Top',
  'Bottom',
  'Start',
  'End',
];

const propTypes = {
  /**
   * The position of the arrow image.
   */
  position: PropTypes.oneOf(arrowPositions),
  offset: PropTypes.number,
  arrowRefCallback: PropTypes.func,
};

const defaultProps = {
  position: 'Top',
  offset: 0,
  arrowRefCallback: undefined,
};

const PopupArrow = ({
    position,
    offset,
    arrowRefCallback,
    ...customProps
  }) => {
  const arrowClassNames = classNames([
    'terra-PopupArrow',
    { [`terra-PopupArrow--align${position}`]: position },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={arrowClassNames} ref={arrowRefCallback}/>
  );
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;

export default PopupArrow;
