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
  /**
   * The class to put on th tag
   */
  className: PropTypes.string,
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
  className,
  ...customProps
  }) => {
  const contentClassName = classNames([
    'terra-Table-header',
    className,
  ]);

  const ascSortInd = classNames([
    'terra-Table-sort-indicator',
    { 'terra-Table-hidden': sort !== 'asc' },
  ]);

  const descSortInd = classNames([
    'terra-Table-sort-indicator',
    { 'terra-Table-hidden': sort !== 'desc' },
  ]);

  const heightProperty = {
    'data-max-height': height,
  };

  return (
    <th className={contentClassName} data-column-min-width={minWidth} {...heightProperty} {...customProps}>
      <div>
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
