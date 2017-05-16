import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content to be displayed in the subheader row
   */
  content: PropTypes.node.isRequired,

  /**
   * Number of columns the subheader must span
   */
  colSpan: PropTypes.number,
};

const TableSubheader = ({
  content,
  colSpan,
  ...customProps
}) => {
  const contentClassName = classNames([
    'terra-Table-subheader',
    customProps.className,
  ]);

  // count is based on the number of columns and assigned in the table component which contains this subheader
  return (
    <tr className="terra-Table-subheaderRow">
      <td {...customProps} className={contentClassName} colSpan={colSpan}>
        {content}
      </td>
    </tr>
  );
};

TableSubheader.propTypes = propTypes;

export default TableSubheader;
