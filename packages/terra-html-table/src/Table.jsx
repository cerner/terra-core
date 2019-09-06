import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the rows should be zebra striped
   */
  isStriped: PropTypes.bool,
  /**
   * Whether or not the table cells should be padded
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
};

const defaultProps = {
  isStriped: true,
  paddingStyle: 'none',
};

const Table = ({
  children,
  isStriped,
  paddingStyle,
  ...customProps
}) => {
  const tableClassNames = cx([
    'table',
    { striped: isStriped },
    { 'padding-standard': paddingStyle === 'standard' },
    { 'padding-compact': paddingStyle === 'compact' },
    customProps.className,
  ]);

  return (
    <table {...customProps} className={tableClassNames}>
      {children}
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
