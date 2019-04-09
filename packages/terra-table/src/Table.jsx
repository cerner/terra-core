import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import uniqueid from 'lodash.uniqueid';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRows from './TableRows';
import TableRow from './TableRow';
import TableCell from './TableCell';
import SelectableTableRows from './SelectableTableRows';
import TableSingleSelectableRows from './SingleSelectableRows';
import TableMultiSelectableRows from './MultiSelectableRows';
import TableSubheader from './TableSubheader';
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
  isPadded: PropTypes.bool,
};

const defaultProps = {
  isStriped: true,
  isPadded: true,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

function cloneChildItems(children, selectRowHelpTextId) {
  return React.Children.map(children, (child) => {
    if (child.type === TableRows) {
      const newProps = {};
      newProps.selectRowHelpTextId = selectRowHelpTextId;
      return React.cloneElement(child, newProps);
    }

    return child;
  });
}

const Table = ({
  children,
  isStriped,
  isPadded,
  ...customProps
}, {
  intl,
}) => {
  const tableClassNames = cx([
    'table',
    { striped: isStriped },
    { padded: isPadded },
    customProps.className,
  ]);

  const selectRowHelpTextId = `terra-table-help-${uniqueid()}`;

  return (
    <React.Fragment>
      <p aria-hidden className={cx('row-selected-help-text')} id={selectRowHelpTextId}>{intl.formatMessage({ id: 'Terra.table.selectRow' })}</p>
      <table {...customProps} className={tableClassNames}>
        {cloneChildItems(children, selectRowHelpTextId)}
      </table>
    </React.Fragment>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.contextTypes = contextTypes;
Table.Rows = TableRows;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.SelectableTableRows = SelectableTableRows;
Table.SingleSelectableRows = TableSingleSelectableRows;
Table.MultiSelectableRows = TableMultiSelectableRows;
Table.Subheader = TableSubheader;

export default Table;
