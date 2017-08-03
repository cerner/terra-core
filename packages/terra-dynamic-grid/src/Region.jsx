
import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /**
   * Name of the grid region
   */
  name: PropTypes.string.isRequired,
  /**
   * The children of the region.
   */
  children: PropTypes.node.isRequired,
  /**
   * The dynamically generated styles to apply to the region. The are set by the grid.
   */
  styles: PropTypes.arrayOf(PropTypes.object),
};

const Region = ({
  name,
  styles,
  children,
  ...customProps
}) => <div data-region-name={name} className={classNames(customProps.className, css(styles))} {...customProps}>
  {children}
</div>;

Region.propTypes = propTypes;

export default Region;
