import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cell.module.scss';
import CellGridUtils from './_CellGridUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to be displayed for the row cell
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the td.
   */
  refCallback: PropTypes.func,
  /**
   * Function callback for the ref of the td.
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number,
      unit: PropTypes.string,
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
