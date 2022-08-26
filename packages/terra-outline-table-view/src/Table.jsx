import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import Table from 'terra-table';

import sectionShape from './proptypes/sectionShape';
import headerShape from './proptypes/headerShape';
import widthShape from './proptypes/widthShape';
import styles from './Table.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An array of sections containing rows.
   * TODO: Not final shape as row headers and parent/children  heirarchies are still needed to be addressed. NOTE: make sure bodyData rows have toggleAction with a toggleLabel, otherwise tests fail aria
   */
  bodyData: PropTypes.arrayOf(sectionShape),
  /**
   * The width value structures associated to each column.
   */
  columnWidths: PropTypes.arrayOf(widthShape),
  /**
   * The data to build header cells and columns.
   */
  headerData: headerShape,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
  /**
   * Element to append to the bottom of the table. i.e. toolbars etc.
   */
  footerNode: PropTypes.node,
  /**
   * The numberOfColumns to be used as a descriptor for assistive technology.
   */
  numberOfColumns: PropTypes.number.isRequired,
  /**
   * This value is used for accessibility when paged/virtualized rows are used.
   * By default this value is derived from the number of rows passed within the section.
   */
  numberOfRows: PropTypes.number,
  /**
   * Function callback returning the html node of the table's inner body element.
   */
  scrollRefCallback: PropTypes.func,
  /**
   * Whether or not a display only footer should be affixed to the table.
   */
  showSimpleFooter: PropTypes.bool,
  /**
   * The summary text to describe the table's content and interactions.
   */
  summary: PropTypes.string.isRequired,
  /**
   * The element id to associate to the descriptive text.
   */
  summaryId: PropTypes.string.isRequired,
};

const defaultProps = {
};

const OutlineTableView = ({
  bodyData,
  columnWidths,
  fill,
  footerNode,
  headerData,
  numberOfColumns,
  numberOfRows,
  scrollRefCallback,
  showSimpleFooter,
  summary,
  summaryId,
  ...customProps
}) => {
  const tableClasses = classNames(
    cx(
      'outline',
    ),
    customProps.className,
  );

  return (
    <Table
      bodyData={bodyData}
      cellPaddingStyle="standard"
      checkStyle="toggle"
      className={tableClasses}
      columnWidths={columnWidths}
      dividerStyle="both"
      fill={fill}
      footerNode={footerNode}
      headerData={headerData}
      numberOfColumns={numberOfColumns}
      numberOfRows={numberOfRows}
      rowStyle="toggle"
      scrollRefCallback={scrollRefCallback}
      showSimpleFooter={showSimpleFooter}
      summary={summary}
      summaryId={summaryId}
    />
  );
};

OutlineTableView.propTypes = propTypes;
OutlineTableView.defaultProps = defaultProps;

export default OutlineTableView;
