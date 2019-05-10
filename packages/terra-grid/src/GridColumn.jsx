import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

const columnRange = (props, propName) => {
  if (props[propName]) {
    const val = props[propName];
    return (val >= 1 && val <= 12)
      ? null
      : new Error(`${propName} must be in range 1 to 12 inclusively`);
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
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `tiny` breakpoint and wider screens.
   */
  tiny: columnRange,
  /**
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `enormous` breakpoint and wider screens.
   */
  enormous: columnRange,
  /**
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `huge` breakpoint and wider screens.
   */
  huge: columnRange,
  /**
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `large` breakpoint and wider screens.
   */
  large: columnRange,
  /**
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `medium` breakpoint and wider screens.
   */
  medium: columnRange,
  /**
   * Defines the number of columns this container will span in the 12 column grid. It is applied at the `small` breakpoint and wider screens.
   */
  small: columnRange,
};

const GridColumn = ({
  className,
  children,
  tiny,
  small,
  medium,
  large,
  huge,
  enormous,
  ...customProps
}) => {
  const colClassNames = cx([
    'column', {
      [`column-tiny-${tiny}`]: tiny,
      [`column-small-${small}`]: small,
      [`column-medium-${medium}`]: medium,
      [`column-large-${large}`]: large,
      [`column-huge-${huge}`]: huge,
      [`column-enormous-${enormous}`]: enormous,
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
