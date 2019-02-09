import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
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
  header: PropTypes.element,
  /**
   * The padding styling to apply to the child list item content.
   * One of `'none'`, `'standard'`, `'compact'`.
   */
  paddingStyle: PropTypes.oneOf(['none', 'standard', 'compact']),
  /**
   * Function callback for the ref of the table.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  paddingStyle: 'none',
};

const Table = ({
  children,
  header,
  paddingStyle,
  refCallback,
  ...customProps
}) => {
  const tableClassNames = cx([
    'table',
    customProps.className,
  ]);

  const attrSpread = {};
  if (paddingStyle !== 'none') {
    attrSpread['data-table-padding'] = paddingStyle;
  }

  return (
    <table {...customProps} {...attrSpread} className={tableClassNames} ref={refCallback} role="grid">
      {header}
      <tbody className={cx(['body'])}>
        {children}
      </tbody>
    </table>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
