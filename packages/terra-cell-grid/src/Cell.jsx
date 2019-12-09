import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import { styleFromWidth } from './_CellGridUtils';

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
   * Composed with for the cell. Handlling static, percentage, and scalar values.
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
      style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
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
