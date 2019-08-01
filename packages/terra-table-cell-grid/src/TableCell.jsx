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
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
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
  isPadded,
  refCallback,
  width,
  ...customProps
}) => {
  const cellClassNames = cx([
    'cell',
    customProps.className,
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
      style={TableUtils.styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={cellClassNames}
      ref={refCallback}
      role="gridcell"
    >
      {content}
    </div>
  );
};

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
