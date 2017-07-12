import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './PopupArrow.scss';

const cx = classNames.bind(styles);
/**
 * Half the diameter of the arrow, to use for arrow positioning offset.
 */
const ARROW_OFFSET = 10;

/**
 * Directional classes to be applied by a presenting component.
 */
const ARROW_ATTRS = {
  top: 'align-top',
  bottom: 'align-bottom',
  left: 'align-left',
  right: 'align-right',
};

/**
 * Mirrored directional classes, used to flip the arrow on repositioning.
 */
const MIRRORED_ARROW_ATTRS = {
  top: 'align-bottom',
  bottom: 'align-top',
  left: 'align-right',
  right: 'align-left',
};

const propTypes = {
  /**
   * The function returning the frame html reference.
   */
  refCallback: PropTypes.func,
};

const PopupArrow = ({
    refCallback,
    ...customProps
  }) => <div {...customProps} className={cx('popupArrow', customProps.className)} ref={refCallback} />;

PopupArrow.propTypes = propTypes;
PopupArrow.positionAttrs = ARROW_ATTRS;
PopupArrow.mirroredPositionAttrs = MIRRORED_ARROW_ATTRS;
PopupArrow.arrowSize = ARROW_OFFSET;

export default PopupArrow;
