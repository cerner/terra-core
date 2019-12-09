import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content for the table consisting of either a TableHeader and/or a TableBody.
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether or not the rows should be zebra striped
   */
  isStriped: PropTypes.bool,
  /**
   * Indicates the desired divider styles to apply to a row and its children.
   * One of `'none'`, `'vertical'`, `'horizontal'`, `'both'`.
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
