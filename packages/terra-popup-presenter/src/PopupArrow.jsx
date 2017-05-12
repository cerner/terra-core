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
};

const defaultProps = {
  position: 'Top',
  offset: 0,
};

const spacerFromOffset = (offset, position) => {
  const styleOffset = {};
  if (['Top','Bottom'].indexOf(position) >= 0) {
    styleOffset.width = offset.toString() + 'px';
    styleOffset.maxWidth = 'calc(100% - 30px)';
  } else {
    styleOffset.height = offset.toString() + 'px';
    styleOffset.maxHeight = 'calc(100% - 30px)';
  }
  return <div className="terra-PopupArrow-spacer" style={styleOffset} />;
};

const PopupArrow = ({
    position,
    offset,
    ...customProps
  }) => {
  const arrowClassNames = classNames([
    'terra-PopupArrow',
    { [`terra-PopupArrow--align${position}`]: position },
    customProps.className,
  ]);

  let startSpacer;
  let endSpacer;
  const absOffset = Math.abs(offset);
  if (absOffset > 0) {
    if (offset < 0) {
      endSpacer = spacerFromOffset(absOffset, position);
    } else {
      startSpacer = spacerFromOffset(absOffset, position);
    }
  }

  // let arrow;
  // if (position === 'Bottom') {
  //   arrow = <IconCaretDown height="30" width="30" />;
  // } else if (position === 'Start') {
  //   arrow = <IconCaretLeft height="30" width="30" />;
  // } else if (position === 'End') {
  //   arrow = <IconCaretRight height="30" width="30" />;
  // } else {
  //   arrow = <IconCaretUp height="30" width="30" />;
  // }

  return (
    <div {...customProps} className={arrowClassNames} />
  );
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;

export default PopupArrow;
