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
