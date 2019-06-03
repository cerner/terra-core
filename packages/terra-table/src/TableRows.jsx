import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableRows = ({
  children,
  ...customProps
}) => (
  <tbody {...customProps}>
    {children}
  </tbody>
);

TableRows.propTypes = propTypes;
TableRows.defaultProps = defaultProps;

export default TableRows;
