import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableSingleSelectableRows from './SingleSelectableRows';
import TableSubheader from './TableSubheader';
import './Table.scss';

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
  isPadded: PropTypes.bool,
};

const defaultProps = {
  isStriped: true,
  isPadded: true,
};

const Table = ({
  children,
  isStriped,
  isPadded,
  ...customProps
  }) => {
  const tableClassNames = classNames([
    'terra-Table',
    { 'terra-Table--striped': isStriped },
    { 'terra-Table--padded': isPadded },
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
Table.Rows = TableRows;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.SingleSelectableRows = TableSingleSelectableRows;
Table.Subheader = TableSubheader;

export default Table;
