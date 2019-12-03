import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';
import headerShape from './proptypes/headerShape';
import widthShape from './proptypes/widthShape';

import Row from './subcomponents/Row';
import Cell from './subcomponents/Cell'
import Section from './subcomponents/Section';
import HeaderRow from './subcomponents/HeaderRow';
import HeaderCell from './subcomponents/HeaderCell';
import ChevronCell from './subcomponents/ChevronCell';
import CheckMarkCell from './subcomponents/CheckMarkCell';
import HeaderChevronCell from './subcomponents/HeaderChevronCell';
import HeaderCheckMarkCell from './subcomponents/HeaderCheckMarkCell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The check mark styling to apply.
   * One of `'none'`, `'readOnly'`, `'toggle'`.
   */
  checkStyle: PropTypes.oneOf([
    'none',
    'readOnly', // TODO: address renaming this, UX ask
    'toggle',
  ]),
  /**
   * The divider styling to apply to the child rows.
   * One of `'none'`, `'disclose'`, `'toggle'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  /**
   * The width value structures associated to each column.
   */
  columnWidths: PropTypes.arrayOf(widthShape),
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
   * This value is used for accessibility when paged/virtualized rows are used.
   * By default this value is derived from the number of rows passed within the sectionData.
   */
  numberOfRows: PropTypes.number,
  /**
   * The padding styling to apply to the cell content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * The interaction styling to apply to the row.
   * One of `'none'`, `'disclose'`, `'toggle'`.
   */
  rowStyle: PropTypes.oneOf([
    'none',
    'disclose',
    'toggle',
  ]),
  /**
   * Function callback returning the html node of the table.
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

const createCell = (cell, sectionId, columnId, colWidth, rowData, isPrimary) => (
  <Cell
    headers={sectionId && columnId ? [sectionId, columnId].join(' ') : sectionId || columnId}
    key={cell.key}
    refCallback={cell.refCallback}
    removeInner={cell.removeInner}
    width={colWidth}
    isPrimary={isPrimary}
    label={isPrimary ? rowData.discloseLabel : undefined}
  >
    {cell.children}
  </Cell>
);

const createCheckCell = (rowData, rowStyle, checkStyle) =>  {
  if (checkStyle === 'readOnly' || checkStyle === 'toggle') {
    return (
      <CheckMarkCell
        alignmentPadding={rowData.checkAlignment}
        metaData={rowData.metaData}
        onSelect={rowData.onCheckAction}
        label={rowData.toggleLabel}
        isSelectable={checkStyle === 'toggle'}
        isSelected={rowData.isToggled}
        isDisabled={rowData.isDisabled}
        isReadOnly={checkStyle === 'readOnly'}
      />
    );
  } else if (rowStyle === 'toggle' && checkStyle === 'none') {
    return (
      <CheckMarkCell
        metaData={rowData.metaData}
        onSelect={rowData.onRowAction}
        label={rowData.toggleLabel}
        isSelected={rowData.isToggled}
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

const createHeaderCheckCell = (checkData, rowStyle, checkStyle) =>  {
  if (!checkData) {
    return undefined;
  }

  if (checkStyle === 'toggle') {
    return (
      <HeaderCheckMarkCell
        alignmentPadding={checkData.checkAlignment}
        isSelectable={checkStyle === 'toggle'}
        isSelected={checkData.status == 'checked' || checkData.status == 'indeterminate'}
        isIndeterminate={checkData.status == 'indeterminate'}
        isDisabled={checkData.isDisabled}
        onSelect={checkData.onToggle}
        label={checkData.label}
      />
    );
  } else if (rowStyle === 'toggle') {
    return (
      <HeaderCheckMarkCell
        label={checkData.label}
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

const createRow = (rowData, rowIndex, sectionId, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle) => (
  <Row
    key={rowData.key}
    aria-rowindex={rowData.index || rowIndex}
    isSelectable={rowStyle === 'toggle' || rowStyle === 'disclose' || checkStyle === 'toggle'}
    isAriaSelected={rowData.isToggled}
    isVisiblySelected={rowData.isVisuallyToggled || (rowData.isToggled && rowStyle === "toggle" && checkStyle !== 'toggle' && checkStyle !== 'readOnly')}
    metaData={rowData.metaData}
    onSelect={rowData.onRowAction}
    isDisabled={rowData.isDisabled}
    isStriped={rowData.isStriped}
    dividerStyle={dividerStyle}
  >
    {createCheckCell(rowData, rowStyle, checkStyle)}
    {rowData.cells.map((cell, colIndex) => {
      const columnId = headerData && headerData.cells ? headerData.cells[colIndex].id : undefined;
      const columnWidth = columnWidths ? columnWidths[colIndex] : undefined;
      return createCell(cell, sectionId, columnId, columnWidth, rowData, colIndex === rowData.primaryIndex);
    })}
    {createChevronCell(rowStyle, hasChevrons)}
  </Row>
);

const createSections = (headerIndex, sectionData, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle) => {
  if (!sectionData) {
    return { sections: undefined, sectionIndex: headerIndex};
  }

  let rowIndex = headerIndex;
  const sections = sectionData.map((section) => {
    if (section.sectionHeader) {
      const header = section.sectionHeader;
      rowIndex += 1
      return (
        <Section
          id={header.id}
          key={header.key}
          aria-rowindex={header.index || rowIndex}
          title={header.title}
          isCollapsed={header.isCollapsed}
          isCollapsible={header.isCollapsible}
          metaData={header.metaData}
          onSelect={header.onSelect}
        >
          {section.rows ? section.rows.map(rowData => {
            rowIndex += 1;
            return createRow(rowData, rowIndex, header.id, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);
          }) : undefined}
        </Section>
      );
    }
    if (section.rows) {
      return section.rows.map(rowData => {
        rowIndex += 1;
        return createRow(rowData, rowIndex, null, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);
      });
    }
    return undefined;
  });

  return { sections, sectionIndex: rowIndex};
};

const createHeader = (headerData, columnWidths, rowStyle, checkStyle, hasChevrons) =>  {
  if (!headerData || !headerData.cells) {
    return { headerIndex: 0, header: undefined };
  }

  return { headerIndex: 1, header: (
    <HeaderRow
      aria-rowindex={1}
    >
      {createHeaderCheckCell(headerData.selectionColumnData, rowStyle, checkStyle)}
      {headerData.cells.map((cellData, colIndex) => (
        <HeaderCell
          key={cellData.key}
          refCallback={cellData.refCallback}
          metaData={cellData.metaData}
          isSortDesc={cellData.isSortDesc}
          isSortActive={cellData.isSortActive}
          onCellAction={cellData.onCellAction}
          onSortAction={cellData.onSortAction}
          width={columnWidths ? columnWidths[colIndex] : undefined}
        >
          {cellData.children}
        </HeaderCell>
      ))}
      {createHeaderChevronCell(rowStyle, hasChevrons)}
    </HeaderRow>
  )};
};

const unpackTableData = (headerData, sectionData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle) => {
  const { headerIndex, header } = createHeader(headerData, columnWidths, rowStyle, checkStyle, hasChevrons);
  const { sectionIndex, sections } = createSections(headerIndex, sectionData, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);
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

  const makeInline = columnWidths && columnWidths.length ? columnWidths.every(width => !!width.static) : undefined;
  const hasEndNodes = headerNode || footerNode;

  const tableClasses = cx(
    'table',
    { fill },
    { 'is-inline': makeInline },
    { rounded: !hasEndNodes },
  );

  const { rowCount, header, sections } = unpackTableData(headerData, sectionData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);

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
