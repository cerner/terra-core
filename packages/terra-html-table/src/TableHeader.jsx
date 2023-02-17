import React from 'react';
import PropTypes from 'prop-types';
import TableUtils from './TableUtils';

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
      {TableUtils.addScope(children, 'col')}
    </tr>
  </thead>
);

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
