import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  content: PropTypes.any.isRequired,
};

const TableCell = ({
  content,
  ...customProps
}) => {
  const dataClassNames = customProps['data-class'] ? `cell ${customProps['data-class']}` : 'cell';
  return (
    <td {...customProps} data-class={dataClassNames}>
      {content}
    </td>
  );
};


TableCell.propTypes = propTypes;

export default TableCell;
