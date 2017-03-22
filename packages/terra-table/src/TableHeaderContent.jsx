import React, { PropTypes } from 'react';
import IconDown from 'terra-icon/lib/icon/IconCaretDown';
import IconUp from 'terra-icon/lib/icon/IconCaretUp';
import classNames from 'classnames';

const propTypes = {
  /**
   * Content to be displayed for the column header
   */
  display: PropTypes.node.isRequired,
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
  /**
   * A callback function for onClick action
   */
  onClick: PropTypes.func,
};

const defaultProps = {
  minWidth: 'small',
};

const iconDown = <IconDown />;
const iconUp = <IconUp />;

const TableHeaderContent = ({
  display,
  height,
  minWidth,
  sort,
  ...customProps
  }) => {
  const headerContentClassNames = classNames([
    { [`terra-Table-headerHeight-${height}`]: height },
    'terra-Table-content',
  ]);

  const contentClassName = classNames([
    { [`terra-Table-width-${minWidth}`]: minWidth },
  ]);

  const ascSortInd = classNames([
    { 'terra-Table-sort-indicator': sort === 'asc' },
    { 'terra-Table-hidden': sort !== 'asc' },
  ]);

  const descSortInd = classNames([
    { 'terra-Table-sort-indicator': sort === 'desc' },
    { 'terra-Table-hidden': sort !== 'desc' },
  ]);

  return (
    <th className={contentClassName} {...customProps}>
      <div className={headerContentClassNames}>
        {display}
        <span className={ascSortInd}>{iconUp}</span>
        <span className={descSortInd}>{iconDown}</span>
      </div>
    </th>
  );
};

TableHeaderContent.propTypes = propTypes;
TableHeaderContent.defaultProps = defaultProps;

export default TableHeaderContent;
