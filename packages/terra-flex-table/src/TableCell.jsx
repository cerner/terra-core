import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TableCell.module.scss';
import TableUtils from './TableUtils';

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

const TableCell = ({
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
      style={TableUtils.styleFromWidth(width)}
      className={cellClassNames}
      ref={refCallback}
      role="gridcell"
    >
      {children}
    </div>
  );
};

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
