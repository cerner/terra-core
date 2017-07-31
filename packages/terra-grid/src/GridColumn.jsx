import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Grid.scss';

const cx = classNames.bind(styles);

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
  /**
   * The component that will be displayed in cell level.
   */
  children: PropTypes.node,
  /**
   * Custom class name that can be assigned to grid column.
   */
  className: PropTypes.string,
  /**
   * The number of columns across all breakpoints. From 1-12(inclusively).
   */
  col: columnRange,
  /**
   * The number of columns starts from huge breakpoint. From 1-12(inclusively).
   */
  huge: columnRange,
  /**
   * The number of columns starts from large breakpoint. From 1-12 (inclusively).
   */
  large: columnRange,
  /**
   * The number of columns starts from medium breakpoint. From 1-12 (inclusively).
   */
  medium: columnRange,
  /**
   * The number of columns starts from small breakpoint. From 1-12 (inclusively).
   */
  small: columnRange,
  /**
   * The number of columns starts from tiny breakpoint. From 1-12 (inclusively).
   */
  tiny: columnRange,
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
  const colClassNames = cx([
    'column', {
      [`column-${col}`]: col,
      [`column-tiny-${tiny}`]: tiny,
      [`column-small-${small}`]: small,
      [`column-medium-${medium}`]: medium,
      [`column-large-${large}`]: large,
      [`column-huge-${huge}`]: huge,
    },
    className,
  ]);

  return (
    <div {...customProps} className={colClassNames}>
      {children}
    </div>
  );
};

GridColumn.propTypes = propTypes;

export default GridColumn;
