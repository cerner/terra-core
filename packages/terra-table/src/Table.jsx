import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
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

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An array of sections containing rows.
   */
  bodyData: PropTypes.arrayOf(sectionShape),
  /**
   * The check mark styling to apply.
   */
  checkStyle: PropTypes.oneOf([
    'icon',
    'toggle',
  ]),
  /**
   * The divider styling to apply to the child rows.
   */
  dividerStyle: PropTypes.oneOf([
    'vertical',
    'horizontal',
    'both',
  ]),
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
   * By default this value is derived from the number of rows passed within the section.
   */
  numberOfRows: PropTypes.number,
  /**
   * The padding styling to apply to the cell content.
   */
  cellPaddingStyle: PropTypes.oneOf([
    'standard',
    'compact',
  ]),
  /**
   * The interaction styling to apply to the row.
   * `'toggle'` relates to the toggling of state as a means of input. `'disclose'` relates to the presentation or disclosure of another component.
   * Both variants can ultimately display as "selected", but the interaction and structure are different for accessibility.
   */
  rowStyle: PropTypes.oneOf([
    'disclose',
    'toggle',
  ]),
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
  fill: false,
  showSimpleFooter: false,
};

// Probably a better way to indent is to assign CSS classes or data attributes.
function createCell(cell, sectionId, columnId, colWidth, discloseData, indent = null, prefix = null) {
  return (
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
      {indent}
      {prefix}
      {cell.children}
    </Cell>
  );
}

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
        isDisabled={rowData.isDisabled}
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
        isDisabled={cellDisabled}
        isSelected={cellStatus === 'checked' || cellStatus === 'indeterminate'}
        isIndeterminate={cellStatus === 'indeterminate'}
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

// This needs a more specific name to signal that it's for the left-most cell.
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
  } else if (tableData.checkStyle === 'toggle' && rowData.toggleAction) {
    // If check style is present the row should also be an actionable item, but only trigger the check mark selection state.
    rowMetaData = rowData.toggleAction.metaData;
    rowOnAction = rowData.toggleAction.onToggle;
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
      refCallback={rowData.refCallback}
    >
      {createCheckCell(rowData, tableData.rowStyle, tableData.checkStyle)}
      {rowData.cells.map((cell, colIndex) => {
        const columnId = tableData.headerData && tableData.headerData.cells ? tableData.headerData.cells[colIndex].id : undefined;
        const columnWidth = tableData.columnWidths ? tableData.columnWidths[colIndex] : undefined;
        const discloseData = colIndex === primaryIndex ? primaryData : undefined;

        // This is not the way to really do this. Use CSS in the real version!!
        // Also in the real code we should define these values for all cells, not
        // just the cells relevant to the demo as I have done here.
        const hShowIcon = tableData.hierarchyShowIcons[cell.key] || false;
        const hIndent = tableData.hierarchyIndents[cell.key] || false;

        return createCell(cell, sectionId, columnId, columnWidth, discloseData, '_'.repeat(hIndent), `${hShowIcon ? '▼' : ' '}`);
      })}
      {createChevronCell(tableData.rowStyle, tableData.hasChevrons)}
    </Row>
  );
};

const createSections = (tableData, headerIndex) => {
  if (!tableData.bodyData) {
    return { sections: undefined, sectionIndex: headerIndex };
  }

  let rowIndex = headerIndex;
  const sections = tableData.bodyData.map((section) => {
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
          numberOfColumns={tableData.checkStyle !== 'toggle' && tableData.rowStyle === 'toggle' ? tableData.numberOfColumns + 1 : tableData.numberOfColumns}
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
            id={cellData.id}
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

// const calculateHierarchyParents = (tableData) => ({
// /** This is hard-coded because it's a POC. The actual algo for doing this
//  *  will be like:
//  *
//  * Initialize, parents P = {};
//  * For each row R in tableData:
//  * if R.parent:
//  *    P[R] = R.parent
//  * else:
//  *    P[R] = R
//  *
//  * This example maps to mock-select.js!!!
//  */
// 'unique-0-0': undefined, // Dave has no parent
// 'unique-1-0': 'unique-0-0', // Michael's parent is Dave
// 'unique-2-0': 'unique-1-0', // Jack's parent is Michael
// 'unique-3-0': 'unique-0-0', // Tom's parent is Dave
// 'unique-4-0': undefined, // Paul has no parent
// });

// const calculateHierarchyChildren = (tableData) => ({
// /** This is hard-coded because it's a POC. The actual algo for doing this
//  *  will be like:
//  *
//  * Initialize, children C = {r:[] for r in Rows};
//  * For each row R in tableData:
//  * if R.parent:
//  *    C[R.parent] ++ R
//  *
//  * This example maps to mock-select.js!!!
//  */
// 'unique-0-0': ['unique-0-1', 'unique-0-3'], // Dave is parent of Michael and Tom.
// 'unique-1-0': ['unique-0-2'], // Michael is parent of Jack.
// 'unique-2-0': [],
// 'unique-3-0': [],
// 'unique-4-0': [],
// });

const calculateHierarchyIndention = (tableData) => ({
  /** This is hard-coded because it's a POC. The actual algo for doing this
   *  will be like:
   *
   * Initialize, indents I = {r:0 for r in Rows};
   * For each row R in tableData:
   * if R.parent:
   *    I[R] = 1 + I[R.parent]
   *
   * This example maps to mock-select.js!!!
   */
  'unique-0-0': 0,
  'unique-1-0': 1,
  'unique-2-0': 2,
  'unique-3-0': 1,
  'unique-4-0': 0,
});

const calculateShowHierarchyIcons = (tableData) => ({
  /** This is hard-coded because it's a POC. The actual algo for doing this
   *  will be like:
   *
   * Initialize, indent I = {r: false for r in Rows};
   * For each row R in tableData:
   * if R.parent:
   *    I[R.parent] = true
   *
   * This example maps to mock-select.js!!!
   */
  'unique-0-0': true, // Dave
  'unique-1-0': true, // Michael
  'unique-2-0': false, // Jack
  'unique-3-0': false, // Tom
  'unique-4-0': false, // Paul
});

const Table = ({
  dividerStyle,
  hasChevrons,
  rowStyle,
  checkStyle,
  columnWidths,
  headerData,
  bodyData,
  fill,
  footerNode,
  headerNode,
  cellPaddingStyle,
  numberOfColumns,
  numberOfRows,
  scrollRefCallback,
  showSimpleFooter,
  summary,
  summaryId,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  // If all column widths are using static sizing alter the table style to display inline.
  const makeInline = columnWidths && columnWidths.length ? columnWidths.every(width => !!width.static) : undefined;
  const hasEndNodes = headerNode || footerNode || showSimpleFooter;

  const tableClasses = classNames(
    cx(
      'table',
      { fill },
      { 'is-inline': makeInline },
      { outer: !hasEndNodes },
      theme.className,
    ),
    customProps.className,
  );

  const tableData = {
    headerData,
    bodyData,
    columnWidths,
    rowStyle,
    checkStyle,
    hasChevrons,
    dividerStyle,
    numberOfColumns,
  };

  // Don't ship this. This is merely the quickest n' dirtiest way.
  // Probably the Table should have some state and we keep that state rather than pass the state down
  // through so many layers of function calls. Same result, but it will unlock us to do arbitrary data processing
  // for cases like outline view.
  //
  // const tableData = useState(tableData, setTableData) ...
  tableData.hierarchyIndents = calculateHierarchyIndention(tableData);
  tableData.hierarchyShowIcons = calculateShowHierarchyIcons(tableData);

  const { rowCount, header, sections } = unpackTableData(tableData);

  const attrSpread = cellPaddingStyle ? { 'data-table-padding': cellPaddingStyle } : {};

  const rows = (
    <div
      {...customProps}
      {...attrSpread}
      className={tableClasses}
      role="grid"
      aria-rowcount={numberOfRows || rowCount}
      aria-describedby={summaryId}
    >
      <VisuallyHiddenText id={summaryId} text={summary} />
      {header}
      {sections ? (
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
        <div className={cx(['body'])} role="rowgroup" ref={scrollRefCallback} tabIndex={fill ? 0 : undefined}>
          {sections}
        </div>
      ) : undefined}
    </div>
  );

  if (!hasEndNodes) {
    return rows;
  }

  const footerElement = [];
  if (footerNode) {
    footerElement.push(footerNode);
  }
  if (showSimpleFooter) {
    footerElement.push(<div className={cx('simple-footer')} />);
  }

  return (
    <ContentContainer
      fill={fill}
      footer={footerElement}
      header={headerNode}
      className={cx(
        'outer',
      )}
    >
      {rows}
    </ContentContainer>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
