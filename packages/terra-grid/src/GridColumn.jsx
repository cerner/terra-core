import React, { PropTypes } from 'react';
import classNames from 'classnames';

const columnRange = (props, propName) => {
  if (props[propName]) {
    const val = props[propName];
    return (val >= 1 && val <= 12) ?
      null :
      new Error(`${propName} must be in range 1 to 12 inclusively`);
  }
  return null;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  col: columnRange,
  tiny: columnRange,
  small: columnRange,
  medium: columnRange,
  large: columnRange,
  huge: columnRange,
};

const GridColumn = ({
    className,
    children,
    col,
    tiny,
    small,
    medium,
    large,
    huge,
    ...customProps
  }) => {
  const colClassNames = classNames([
    'terra-Grid-col', {
      [`terra-Grid-col--${col}`]: col,
      [`terra-Grid-col--tiny-${tiny}`]: tiny,
      [`terra-Grid-col--small-${small}`]: small,
      [`terra-Grid-col--medium-${medium}`]: medium,
      [`terra-Grid-col--large-${large}`]: large,
      [`terra-Grid-col--huge-${huge}`]: huge,
    },
    className,
  ]);

  return (
    <div
      {...customProps}
      className={colClassNames}
    >
      {children}
    </div>
  );
};

GridColumn.propTypes = propTypes;

export default GridColumn;
