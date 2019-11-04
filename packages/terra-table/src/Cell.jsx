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
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Function callback returning the html node for the cell.
   */
  refCallback: PropTypes.func,
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
  isPadded: false,
};

const Cell = ({
  children,
  isPadded,
  refCallback,
  width,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
  ]);

  let content = children;
  if (isPadded) {
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
