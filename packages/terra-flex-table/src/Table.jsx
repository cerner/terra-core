import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * The header passed to the table
   */
  headerCells: PropTypes.arrayOf(PropTypes.element),
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  scrollRefCallback: PropTypes.func,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
};

const defaultProps = {
  headerCells: [],
  paddingStyle: 'none',
  fill: false,
};
const Table = ({
  children,
  fill,
  headerCells,
  paddingStyle,
  scrollRefCallback,
  ...customProps
}) => {
  const attrSpread = {};
  if (paddingStyle !== 'none') {
    attrSpread['data-table-padding'] = paddingStyle;
  }

  let header;
  let makeInline = false;
  if (headerCells.length) {
    makeInline = headerCells.every(cell => (cell.props.width && cell.props.width.static));
    header = (
      <div className={cx(['header'])} role="rowgroup">
        <div className={cx(['header-content'])} role="row">
          {headerCells}
        </div>
      </div>
    );
  }

  const tableClassNames = cx([
    'table',
    { fill },
    { 'is-inline': makeInline },
    customProps.className,
  ]);

  return (
    <div {...customProps} {...attrSpread} className={tableClassNames} role="grid">
      {header}
      <div className={cx(['body'])} role="rowgroup" ref={scrollRefCallback}>
        {children}
      </div>
    </div>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
