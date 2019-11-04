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
   * The HeaderRow element containing the header cells used for the table.
   */
  headerRow: PropTypes.element,
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

  const tableClasses = cx(
    'table',
    { fill },
    { 'is-inline': makeInline },
    { rounded: !hasEndNodes },
  );

  const rows = (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${tableClasses} ${customProps.className}` : tableClasses}
      role="grid"
    >
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
