import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './PopupArrow.scss';

const cx = classNames.bind(styles);
/**
 * Half the base of the arrow, to use for arrow positioning offset.
 */
const ARROW_OFFSET = 11;
/**
 * Directional attribute to be applied by a presenting component.
 */
const ARROW_ATTR = 'data-align-arrow';

const propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const PopupArrow = ({
    refCallback,
    ...customProps
  }) => <div {...customProps} className={cx(['popup-arrow', customProps.className])} ref={refCallback} />;

PopupArrow.propTypes = propTypes;
PopupArrow.Opts = {
  arrowSize: ARROW_OFFSET,
  positionAttr: ARROW_ATTR,
};

export default PopupArrow;
