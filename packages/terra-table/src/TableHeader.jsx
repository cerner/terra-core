import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
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

export default TableHeader;
