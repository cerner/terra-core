
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * Name of the grid region
   */
  name: PropTypes.string.isRequired,
  /**
   * The children of the region.
   */
  children: PropTypes.node.isRequired,
};

const Region = ({
  name,
  children,
  ...customProps
}) => <div data-region-name={name} {...customProps}>
  {children}
</div>;

Region.propTypes = propTypes;

export default Region;
