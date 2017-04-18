import React, { PropTypes } from 'react';
import classNames from 'classnames';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableSingleSelectableRows from './SingleSelectableRows';
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

export default Table;
