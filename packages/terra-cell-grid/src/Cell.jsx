import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import CellGridUtils from './_CellGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the cell
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the cell.
   */
  refCallback: PropTypes.func,
  /**
   * String-formatted width that the HeaderCell should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
};

const defaultProps = {
  children: [],
};

const Cell = ({
  children,
  refCallback,
  width,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
    customProps.className,
  ]);

  return (
    <div
      {...customProps}
      style={CellGridUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cellClassNames}
      ref={refCallback}
    >
      {children}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
