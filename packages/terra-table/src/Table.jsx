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

function cloneChildItems(children, selectableRowHelpTextId, selectedRowHelpTextId, liveRegion) {
  return React.Children.map(children, (child) => {
    switch (child.type) {
      case SelectableTableRows:
      case TableSingleSelectableRows:
      case TableMultiSelectableRows: {
        const newProps = {};
        newProps.selectableRowHelpTextId = selectableRowHelpTextId;
        newProps.selectedRowHelpTextId = selectedRowHelpTextId;
        newProps.liveRegion = liveRegion;
        return React.cloneElement(child, newProps);
      }
      default:
        return child;
    }
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

  const liveRegion = React.createRef();
  const selectableRowHelpTextId = `terra-table-row-selectable-${uniqueid()}`;
  const selectedRowHelpTextId = `terra-table-row-selected-${uniqueid()}`;

  return (
    <React.Fragment>
      <table {...customProps} className={tableClassNames}>
        {cloneChildItems(children, selectableRowHelpTextId, selectedRowHelpTextId, liveRegion)}
      </table>
      <p aria-atomic="false" className={cx('visually-hidden-component')} aria-live="assertive" aria-relevant="additions text" ref={liveRegion} />
      <p aria-hidden className={cx('row-select-help-text')} id={selectableRowHelpTextId}>{intl.formatMessage({ id: 'Terra.table.selectableRow' })}</p>
      <p aria-hidden className={cx('row-select-help-text')} id={selectedRowHelpTextId}>{intl.formatMessage({ id: 'Terra.table.selectedRow' })}</p>
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
