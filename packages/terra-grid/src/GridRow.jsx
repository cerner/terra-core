import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * The component that will be displayed at column level.
   */
  children: PropTypes.node.isRequired,
  /**
   * Custom class name that can be assigned to grid row.
   */
  className: PropTypes.string,
};

const GridRow = ({
    className,
    children,
    ...customProps
  }) => {
  const rowClassNames = classNames([
    'terra-Grid',
    className,
  ]);

  return (
    <div
      {...customProps}
      className={rowClassNames}
    >
      {children}
    </div>
  );
};

GridRow.propTypes = propTypes;

export default GridRow;
