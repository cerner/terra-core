import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './PopupArrow.scss';

const propTypes = {
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

export default PopupArrow;
