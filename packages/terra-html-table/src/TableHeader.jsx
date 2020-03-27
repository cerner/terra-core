import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The child TableHeaderCells to place within the header.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableHeader = ({
  children,
  ...customProps
}) => (
  <thead {...customProps}>
    <tr>
      {children}
    </tr>
  </thead>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
