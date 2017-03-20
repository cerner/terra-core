import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  display: PropTypes.any.isRequired,
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const TableRowContent = ({
  display,
  height,
  ...customProps
  }) => {
  const contentClassName = classNames([
    { [`terra-Table-height-${height}`]: height },
    'terra-Table-content',
  ]);
  return (
    <td {...customProps}>
      <div className={contentClassName}>{display}</div>
    </td>
  );
};

TableRowContent.propTypes = propTypes;

export default TableRowContent;
