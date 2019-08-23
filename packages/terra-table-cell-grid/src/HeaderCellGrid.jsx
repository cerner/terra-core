import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderCheckMarkCell from './HeaderCheckMarkCell';
import HeaderChevronCell from './HeaderChevronCell';

import styles from './TableCellGrid.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the tr.
   */
  refCallback: PropTypes.func,
  /**
   * Style of selection for the row.
   * One of `default`, `checkmark`, `chevron`.
   */
  selectionStyle: PropTypes.oneOf(['default', 'checkmark', 'chevron']),
};

const defaultProps = {
  children: [],
  selectionStyle: 'default',
};

const HeaderCellGrid = ({
  children,
  refCallback,
  selectionStyle,
  ...customProps
}) => {
  const rowClassNames = cx([
    'header',
    customProps.className,
  ]);

  let checkmark;
  let chevron;
  if (selectionStyle === 'checkmark') {
    checkmark = (
      <HeaderCheckMarkCell isPadded />
    );
  } else if (selectionStyle === 'chevron') {
    chevron = (
      <HeaderChevronCell isPadded />
    );
  }

  return (
    <div className={rowClassNames} role="rowgroup">
      <div className={cx(['header-content'])} role="row">
        {checkmark}
        {children}
        {chevron}
      </div>
    </div>
  );
};

HeaderCellGrid.propTypes = propTypes;
HeaderCellGrid.defaultProps = defaultProps;

export default HeaderCellGrid;
