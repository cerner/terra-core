import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';
import headerShape from './proptypes/headerShape';
import widthShape from './proptypes/widthShape';

import Row from './subcomponents/_Row';
import Cell from './subcomponents/_Cell';
import Section from './subcomponents/_Section';
import HeaderRow from './subcomponents/_HeaderRow';
import HeaderCell from './subcomponents/_HeaderCell';
import ChevronCell from './subcomponents/_ChevronCell';
import CheckMarkCell from './subcomponents/_CheckMarkCell';
import HeaderChevronCell from './subcomponents/_HeaderChevronCell';
import HeaderCheckMarkCell from './subcomponents/_HeaderCheckMarkCell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The check mark styling to apply.
   */
  checkStyle: PropTypes.oneOf([
    'none',
    'icon',
    'toggle',
  ]),
  /**
   * The divider styling to apply to the child rows.
   */
  dividerStyle: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  /**
   * The width value structures associated to each column.
   */
  columnWidths: PropTypes.arrayOf(widthShape),
  /**
   * Whether or not the rows should have chevrons applied.
   */
  hasChevrons: PropTypes.bool,
  /**
   * The data to build header cells and columns.
   */
  headerData: headerShape,
  /**
   * Element to append to the top of the table. i.e. toolbars etc.
   */
  headerNode: PropTypes.node,
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
   * By default this value is derived from the number of rows passed within the sectionData.
   */
  numberOfRows: PropTypes.number,
  /**
   * The padding styling to apply to the cell content.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * The interaction styling to apply to the row.
   */
  rowStyle: PropTypes.oneOf([
    'none',
    'disclose',
    'toggle',
  ]),
  /**
   * Function callback returning the html node of the table's inner body element.
   */
  scrollRefCallback: PropTypes.func,
  /**
   * The grouping of rows associated to the table. A section header can also be paired with the rows.
   */
  sectionData: PropTypes.arrayOf(sectionShape),
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
  dividerStyle: 'none',
  fill: false,
  paddingStyle: 'none',
  rowStyle: 'none',
  checkStyle: 'none',
};

const createCell = (cell, sectionId, columnId, colWidth, discloseData) => (
  <Cell
    {...cell.attrs}
    // The headers attribute is a string that gives the cell a column reading order.
    headers={sectionId && columnId ? [sectionId, columnId].join(' ') : sectionId || columnId}
    key={cell.key}
    refCallback={cell.refCallback}
    removeInner={cell.removeInner}
    width={colWidth}
    disclosureData={discloseData}
  >
    {cell.children}
  </Cell>
);

const createCheckCell = (rowData, rowStyle, checkStyle) => {
  let cellMetaData;
  let cellOnAction;
  let cellActiveState;
  let cellLabel;
  if (rowData.toggleAction) {
    cellMetaData = rowData.toggleAction.metaData;
    cellOnAction = rowData.toggleAction.onToggle;
    cellActiveState = rowData.toggleAction.isToggled;
    cellLabel = rowData.toggleAction.toggleLabel;
  }

  // Check style takes priority over the row styling. If a check is set to toggle or icon we know that it is face up.
  if (checkStyle === 'toggle' || checkStyle === 'icon') {
    return (
      <CheckMarkCell
        alignmentPadding={rowData.checkAlignment}
        metaData={cellMetaData}
        onSelect={cellOnAction}
        label={cellLabel}
        isSelectable={checkStyle === 'toggle'}
        isSelected={cellActiveState}
        isDisabled={rowData.isDisabled}
        isIcon={checkStyle === 'icon'}
      />
    );
  }

  // When the rowstyle is toggle we still to create a checkmark, but a hidden one.
  // This allows someone with a screenreader to view selection
  if (rowStyle === 'toggle') {
    return (
      <CheckMarkCell
        metaData={cellMetaData}
        onSelect={cellOnAction}
        label={cellLabel}
        isSelected={cellActiveState}
        isHidden
      />
    );
  }
  return undefined;
};

const createChevronCell = (rowStyle, hasChevrons) => {
  if (rowStyle === 'disclose' && hasChevrons) {
    return <ChevronCell />;
  }
  return undefined;
};

const createHeaderCheckCell = (columnData, rowStyle, checkStyle) => {
  let cellAlignment;
  let cellOnAction;
  let cellStatus;
  let cellLabel;
  let cellDisabled;
  if (columnData) {
    cellAlignment = columnData.checkAlignment;
    cellOnAction = columnData.onCheckAction;
    cellStatus = columnData.checkStatus;
    cellLabel = columnData.checkLabel;
    cellDisabled = columnData.isDisabled;
  }

  // Check style takes priority over the row styling. If a check is set to toggle or icon we know that it is face up.
  if (checkStyle === 'toggle' || checkStyle === 'icon') {
    return (
      <HeaderCheckMarkCell
        alignmentPadding={cellAlignment}
        isSelectable={checkStyle === 'toggle' && !!cellOnAction}
        isSelected={cellStatus === 'checked' || cellStatus === 'indeterminate'}
        isIndeterminate={cellStatus === 'indeterminate'}
        isDisabled={cellDisabled}
        onSelect={cellOnAction}
        label={cellLabel}
      />
    );
  }

  // When the row style is toggle we still to create a check mark, but a hidden one.
  // This allows someone with a screen reader to view selection
  if (rowStyle === 'toggle') {
    return (
      <HeaderCheckMarkCell
        label={cellLabel}
        isHidden
      />
    );
  }
  return undefined;
};

const createHeaderChevronCell = (rowStyle, hasChevrons) => {
  if (rowStyle === 'disclose' && hasChevrons) {
    return <HeaderChevronCell />;
  }
  return undefined;
};

const createRow = (tableData, rowData, rowIndex, sectionId) => {
  let rowMetaData;
  let rowOnAction;
  let rowActiveState;
  let primaryData;
  let primaryIndex;
  if (tableData.rowStyle === 'disclose' && rowData.discloseAction) {
    rowMetaData = rowData.discloseAction.metaData;
    rowOnAction = rowData.discloseAction.onDisclose; // The disclosure action will trigger from the entire row.
    rowActiveState = rowData.discloseAction.isDisclosed; // Disclosure will show row selection, but only the link will show to a screen reader as current.
    primaryIndex = rowData.discloseAction.discloseCellIndex; // The index of the cell that will be converted to a link for disclosure.
    primaryData = { label: rowData.discloseAction.discloseLabel, isCurrent: rowData.discloseAction.isDisclosed };
  } else if (tableData.rowStyle === 'toggle' && rowData.toggleAction) {
    rowMetaData = rowData.toggleAction.metaData;
    rowOnAction = rowData.toggleAction.onToggle;
    // We only want to enable a selected state is check style isn't icon.
    // If icon a check mark is displayed to show selection rather than row highlight.
    rowActiveState = tableData.checkStyle !== 'icon' && rowData.toggleAction.isToggled;
  }

  return (
    <Row
      {...rowData.attrs}
      key={rowData.key}
      aria-rowindex={rowData.index || rowIndex}
      metaData={rowMetaData}
      isSelectable={tableData.rowStyle === 'toggle' || tableData.rowStyle === 'disclose' || tableData.checkStyle === 'toggle'}
      isSelected={rowActiveState}
      onSelect={rowOnAction}
      isDisabled={rowData.isDisabled}
      isStriped={rowData.isStriped}
      dividerStyle={tableData.dividerStyle}
    >
      {createCheckCell(rowData, tableData.rowStyle, tableData.checkStyle)}
      {rowData.cells.map((cell, colIndex) => {
        const columnId = tableData.headerData && tableData.headerData.cells ? tableData.headerData.cells[colIndex].id : undefined;
        const columnWidth = tableData.columnWidths ? tableData.columnWidths[colIndex] : undefined;
        const discloseData = colIndex === primaryIndex ? primaryData : undefined;
        return createCell(cell, sectionId, columnId, columnWidth, discloseData);
      })}
      {createChevronCell(tableData.rowStyle, tableData.hasChevrons)}
    </Row>
  );
};

const createSections = (tableData, headerIndex) => {
  if (!tableData.sectionData) {
    return { sections: undefined, sectionIndex: headerIndex };
  }

  let rowIndex = headerIndex;
  const sections = tableData.sectionData.map((section) => {
    if (section.sectionHeader) {
      const header = section.sectionHeader;
      rowIndex += 1;
      return (
        <Section
          id={header.id}
          key={header.key}
          aria-rowindex={header.index || rowIndex}
          title={header.title}
          isCollapsed={header.isCollapsed}
          isCollapsible={!!header.onToggle}
          metaData={header.metaData}
          numberOfColumns={tableData.numberOfColumns}
          onSelect={header.onToggle}
        >
          {section.rows ? section.rows.map(rowData => {
            rowIndex += 1;
            return createRow(tableData, rowData, rowIndex, header.id);
          }) : undefined}
        </Section>
      );
    }
    if (section.rows) {
      return section.rows.map(rowData => {
        rowIndex += 1;
        return createRow(tableData, rowData, rowIndex, null);
      });
    }
    return undefined;
  });

  return { sections, sectionIndex: rowIndex };
};

const createHeader = (tableData) => {
  if (!tableData.headerData || !tableData.headerData.cells) {
    return { headerIndex: 0, header: undefined };
  }

  return {
    headerIndex: 1,
    header: (
      <HeaderRow
        aria-rowindex={1} // Row count begins with the header.
      >
        {createHeaderCheckCell(tableData.headerData.selectAllColumn, tableData.rowStyle, tableData.checkStyle)}
        {tableData.headerData.cells.map((cellData, colIndex) => (
          <HeaderCell
            {...cellData.attrs}
            key={cellData.key}
            refCallback={cellData.refCallback}
            metaData={cellData.metaData}
            isSortDesc={cellData.isSortDesc}
            isSortActive={cellData.isSortActive}
            onCellAction={cellData.onCellAction}
            onSortAction={cellData.onSortAction}
            removeInner={cellData.removeInner}
            width={tableData.columnWidths ? tableData.columnWidths[colIndex] : undefined}
          >
            {cellData.children}
          </HeaderCell>
        ))}
        {createHeaderChevronCell(tableData.rowStyle, tableData.hasChevrons)}
      </HeaderRow>
    ),
  };
};

const unpackTableData = (tableData) => {
  const { headerIndex, header } = createHeader(tableData);
  const { sectionIndex, sections } = createSections(tableData, headerIndex);
  return { rowCount: sectionIndex, header, sections };
};

const Table = ({
  dividerStyle,
  hasChevrons,
  rowStyle,
  checkStyle,
  columnWidths,
  headerData,
  sectionData,
  fill,
  footerNode,
  headerNode,
  paddingStyle,
  numberOfColumns,
  numberOfRows,
  scrollRefCallback,
  summary,
  summaryId,
  ...customProps
}) => {
  const attrSpread = {};
  if (paddingStyle !== 'none') {
    attrSpread['data-table-padding'] = paddingStyle;
  }

  // If all column widths are using static sizing alter the table style to display inline.
  const makeInline = columnWidths && columnWidths.length ? columnWidths.every(width => !!width.static) : undefined;
  const hasEndNodes = headerNode || footerNode;

  const tableClasses = cx(
    'table',
    { fill },
    { 'is-inline': makeInline },
    { rounded: !hasEndNodes },
  );

  const tableData = {
    headerData,
    sectionData,
    columnWidths,
    rowStyle,
    checkStyle,
    hasChevrons,
    dividerStyle,
    numberOfColumns,
  };
  const { rowCount, header, sections } = unpackTableData(tableData);

  const rows = (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${tableClasses} ${customProps.className}` : tableClasses}
      role="grid"
      aria-rowcount={numberOfRows || rowCount}
      aria-describedby={summaryId}
    >
      <VisuallyHiddenText id={summaryId} text={summary} />
      {header}
      {sections ? (
        <div className={cx(['body'])} role="rowgroup" ref={scrollRefCallback}>
          {sections}
        </div>
      ) : undefined}
    </div>
  );

  if (!hasEndNodes) {
    return rows;
  }

  return (
    <ContentContainer
      fill={fill}
      footer={footerNode}
      header={headerNode}
      className={cx(
        'rounded',
      )}
    >
      {rows}
    </ContentContainer>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
