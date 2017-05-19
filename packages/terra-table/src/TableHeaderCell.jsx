import React from 'react';
import PropTypes from 'prop-types';
import IconDown from 'terra-icon/lib/icon/IconCaretDown';
import IconUp from 'terra-icon/lib/icon/IconCaretUp';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';

const propTypes = {
  /**
   * Content to be displayed for the column header
   */
  content: PropTypes.node.isRequired,
  /**
   * The minimum width for the column
   */
  minWidth: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Whether or not data in table is sorted
   */
  sort: PropTypes.oneOf(['asc', 'desc']),
};

const defaultProps = {
  minWidth: 'small',
};

const iconDown = <IconDown />;
const iconUp = <IconUp />;

const TableHeaderCell = ({
  content,
  minWidth,
  sort,
  ...customProps
  }) => {
  const contentClassName = classNames([
    { [`terra-Table-min-width--${minWidth}`]: minWidth },
    'terra-Table-header',
    customProps.className,
  ]);

  const dataSort = {
    'data-sort': sort,
  };

  let sortIndicator = null;
  if (sort === 'asc') {
    sortIndicator = <span className={'terra-Table-sort-indicator'}>{iconUp}</span>;
  } else if (sort === 'desc') {
    sortIndicator = <span className={'terra-Table-sort-indicator'}>{iconDown}</span>;
  }

  return (
    <th {...customProps} className={contentClassName} {...dataSort}>
      {content}
      {sortIndicator}
    </th>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
