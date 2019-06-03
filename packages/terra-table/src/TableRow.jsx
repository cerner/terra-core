import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const TableRow = ({
  children,
  ...customProps
}) => {
  const rowClassNames = cx([
    'row',
    customProps.className,
  ]);

  return (
    <tr {...customProps} className={rowClassNames}>
      {children}
    </tr>
  );
};

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
