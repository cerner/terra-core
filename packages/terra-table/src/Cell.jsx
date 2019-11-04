import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import { styleFromWidth } from './TableUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child content to be displayed for the row cell.
   */
  children: PropTypes.node,
  /**
   * Function callback returning the html node for the cell.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not the cell's container responsible for using the table's default padding is removed.
   * This is useful to optimize the DOM for either a table without padding or to optimize a cell whose content is providing its own padding.
   */
  removePadding: PropTypes.bool,
  /**
   * Width of the cell. Should match header cell counter-part.
   */
  width: PropTypes.shape({
    /**
     * Static width that for the cell.
     */
    static: PropTypes.shape({
      /**
       * Numerical width value.
       */
      value: PropTypes.number.isRequired,
      /**
       * Valid css units are supported (i.e. 'px', 'rem', etc).
       */
      unit: PropTypes.string.isRequired,
    }),
    /**
     * Percentage width of the row for the cell.
     */
    percentage: PropTypes.number,
    /**
     * Relative scalar value of the cell's width compared to its sibling cells.
     */
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  children: [],
  removePadding: false,
};

const Cell = ({
  children,
  refCallback,
  removePadding,
  width,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
  ]);

  let content = children;
  if (!removePadding) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  return (
    <div
      {...customProps}
      style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={customProps.className ? `${cellClassNames} ${customProps.className}` : cellClassNames}
      ref={refCallback}
      role="gridcell"
    >
      {content}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
