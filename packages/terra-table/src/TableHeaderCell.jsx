import React, { PropTypes } from 'react';
import IconDown from 'terra-icon/lib/icon/IconCaretDown';
import IconUp from 'terra-icon/lib/icon/IconCaretUp';
import classNames from 'classnames';

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
  /**
   * The maximum height for the cell content in a table
   */
  height: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

const defaultProps = {
  minWidth: 'small',
};

const iconDown = <IconDown />;
const iconUp = <IconUp />;

const TableHeaderCell = ({
  content,
  height,
  minWidth,
  sort,
  ...customProps
  }) => {
  const contentClassName = classNames([
    { [`terra-Table-min-width--${minWidth}`]: minWidth },
    { [`terra-Table-header-max-height--${height}`]: height },
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
      <div>
        {content}
        {sortIndicator}
      </div>
    </th>
  );
};

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;

export default TableHeaderCell;
