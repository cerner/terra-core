import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node.isRequired,
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
