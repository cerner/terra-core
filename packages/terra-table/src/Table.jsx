import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';
import headerShape from './proptypes/headerShape';
import widthShape from './proptypes/widthShape';

import Section from './subcomponents/Section';
import Row from './subcomponents/Row';
import Cell from './subcomponents/Cell'
import HeaderCell from './subcomponents/HeaderCell';
import HeaderRow from './subcomponents/HeaderRow';
import ChevronCell from './subcomponents/ChevronCell';
import CheckMarkCell from './subcomponents/CheckMarkCell';
import HeaderChevronCell from './subcomponents/HeaderChevronCell';
import HeaderCheckMarkCell from './subcomponents/HeaderCheckMarkCell';

const cx = classNames.bind(styles);

const propTypes = {
  // isSelectable: PropTypes.bool,
  rowStyle: PropTypes.oneOf([
    'none',
    'disclose',
    'toggle',
  ]),
  checkStyle: PropTypes.oneOf([
    'none',
    'readOnly', // TODO: address renaming
    'toggle',
  ]),

  dividerStyle: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  // selectionStyle: PropTypes.oneOf(['default', 'checkmark', 'chevron']),
  columnWidths: PropTypes.arrayOf(widthShape),
  /**
   * The children passed to the component
   */
  sectionData: PropTypes.arrayOf(sectionShape),
  /**
   * The HeaderRow element containing the header cells used for the table.
   */
  // columnData: PropTypes.arrayOf(headerCellShape),
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
   * The padding styling to apply to the cell content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback returning the html node of the table.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  dividerStyle: 'none',
  fill: false,
  paddingStyle: 'none',
};

const createCell = (cell, sectionId, columnId, colWidth) => (
  <Cell
    headers={[sectionId, columnId].join(' ')}
    key={cell.key}
    refCallback={cell.refCallback}
    removeInner={cell.removeInner}
    width={colWidth}
  >
    {cell.children}
  </Cell>
);

const createCheckCell = (rowData, rowStyle, checkStyle) =>  {
  if (checkStyle === 'readOnly' || checkStyle === 'toggle') {
    const isSelected = (checkStyle === 'readOnly' || checkStyle === 'toggle') && rowData.isToggled;
    return <CheckMarkCell isSelectable={checkStyle === 'toggle'} isSelected={isSelected} />;
  }
  return undefined;
};

const createChevronCell = (rowStyle, hasChevrons) => {
  if (rowStyle === 'disclose' && hasChevrons) {
    return <ChevronCell />;
  }
  return undefined;
};

const createHeaderCheckCell = (headerData, checkStyle) =>  {
  if (checkStyle && checkStyle !== 'none') {
    return (
      <HeaderCheckMarkCell
        isSelectable={checkStyle === 'toggle' && headerData.allowSelectAll}
        isSelected={headerData.selectAllStatus == 'checked' || headerData.selectAllStatus == 'indeterminate'}
        isIndeterminate={headerData.selectAllStatus == 'indeterminate'}
        isDisabled={headerData.isDisabled}
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
    metaData={{ key: rowData.key }}
    onSelect={rowData.onRowAction}
    isDisabled={rowData.isDisabled}
    isStriped={rowData.isStriped}
    dividerStyle={dividerStyle}
  >
    {createCheckCell(rowData, rowStyle, checkStyle, rowData.onCheckAction)}
    {rowData.cells.map((cell, colIndex) => createCell(cell, sectionId, headerData && headerData.cells ? headerData.cells[colIndex].id : undefined, columnWidths ? columnWidths[colIndex] : undefined))}
    {createChevronCell(rowStyle, hasChevrons)}
  </Row>
);

const createSections = (sectionData, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle) => {
  if (!sectionData) {
    return;
  }

  // need style here?
  let rowIndex = headerData && headerData.cells ? 1 : 0;

  return sectionData.map((section) => {
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
};

const createHeader = (headerData, columnWidths, rowStyle, checkStyle, hasChevrons) =>  {
  if (!headerData || !headerData.cells) {
    return;
  }

  return (
    <HeaderRow
      aria-rowindex={1}
    >
      {createHeaderCheckCell(headerData, checkStyle)}
      {headerData.cells.map((cellData, colIndex) => (
        <HeaderCell
          key={cellData.key}
          refCallback={cellData.refCallback}
          metaData={cellData.metaData}
          onSelect={cellData.onSelect}
          sort={cellData.sort}
          width={columnWidths ? columnWidths[colIndex] : undefined}
        >
          {cellData.children}
        </HeaderCell>
      ))}
      {createHeaderChevronCell(rowStyle, hasChevrons)}
    </HeaderRow>
  );
};

const unpackTableData = (headerData, sectionData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle) => {
  // do we create start end elements here?
  const header = createHeader(headerData, columnWidths, rowStyle, checkStyle, hasChevrons);
  const sections = createSections(sectionData, headerData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);
  return { header, sections };
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
  scrollRefCallback,
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

  const { header, sections } = unpackTableData(headerData, sectionData, columnWidths, rowStyle, checkStyle, hasChevrons, dividerStyle);

  const rows = (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${tableClasses} ${customProps.className}` : tableClasses}
      role="grid"
    >
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
