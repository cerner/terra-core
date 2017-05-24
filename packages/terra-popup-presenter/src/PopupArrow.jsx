import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './PopupArrow.scss';

const ARROW_OFFSET = 10;
const ARROW_CLASSES = {
  top: 'terra-PopupArrow--alignTop',
  bottom: 'terra-PopupArrow--alignBottom',
  left: 'terra-PopupArrow--alignLeft',
  right: 'terra-PopupArrow--alignRight',
};

const ARROW_OPPOSITE_CLASSES = {
  top: 'terra-PopupArrow--alignBottom',
  bottom: 'terra-PopupArrow--alignTop',
  left: 'terra-PopupArrow--alignRight',
  right: 'terra-PopupArrow--alignLeft',
};

const propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  refCallback: undefined,
};

const PopupArrow = ({
    refCallback,
    ...customProps
  }) => {
  const arrowClassNames = classNames([
    'terra-PopupArrow',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={arrowClassNames} ref={refCallback} />
  );
};

PopupArrow.propTypes = propTypes;
PopupArrow.defaultProps = defaultProps;
PopupArrow.positionClasses = ARROW_CLASSES;
PopupArrow.oppositePositionClasses = ARROW_OPPOSITE_CLASSES;
PopupArrow.arrowSize = ARROW_OFFSET;

export default PopupArrow;
