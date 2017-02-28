import React, { PropTypes } from 'react';
import classNames from 'classnames';
import '../src/status.scss';

const propTypes = {
  children: PropTypes.node.isRequired,
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
