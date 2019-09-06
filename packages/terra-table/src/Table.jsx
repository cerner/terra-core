import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The HeaderRow passed to the table, should have widths aligned with the child Rows.
   */
  headerRow: PropTypes.element,
  /**
   * Element to append to the top of the table row. i.e. toolbars etc.
   */
  headerNode: PropTypes.node,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
  /**
   * Element to append to the bottom of the table row. i.e. toolbars etc.
   */
  footerNode: PropTypes.node,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  scrollRefCallback: PropTypes.func,
};

const defaultProps = {
  paddingStyle: 'none',
  fill: false,
};

const Table = ({
  children,
  fill,
  footerNode,
  headerRow,
  headerNode,
  paddingStyle,
  scrollRefCallback,
  ...customProps
}) => {
  const attrSpread = {};
  if (paddingStyle !== 'none') {
    attrSpread['data-table-padding'] = paddingStyle;
  }

  const makeInline = headerRow ? React.Children.toArray(headerRow.props.children).every(cell => (cell.props.width && cell.props.width.static)) : undefined;
  const hasEndNodes = headerNode || footerNode;

  const tableClassNames = cx([
    'table',
    { fill },
    { 'is-inline': makeInline },
    { rounded: !hasEndNodes },
    customProps.className,
  ]);

  const rows = (
    <div {...customProps} {...attrSpread} className={tableClassNames} role="grid">
      {headerRow}
      {children ? (
        <div className={cx(['body'])} role="rowgroup" ref={scrollRefCallback}>
          {children}
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
