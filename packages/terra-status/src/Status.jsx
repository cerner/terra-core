import React, { PropTypes } from 'react';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './Status.scss';

const propTypes = {
  /**
   * Child node. Component to display next to the status indicator.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the status indicator. Accepts a CSS color value.
   */
  color: PropTypes.string.isRequired,
};

const Status = ({ color, children, ...customProps }) => {
  const statusClassNames = classNames(
    'terra-Status',
    { [`${customProps.className}`]: customProps.className },
  );
  return (
    <div {...customProps} style={{ borderColor: color }} className={statusClassNames} >
      {children}
    </div>
  );
};

Status.propTypes = propTypes;

export default Status;
