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

const TableBody = ({
  children,
  ...customProps
}) => (
  <tbody {...customProps}>
    {children}
  </tbody>
);

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
