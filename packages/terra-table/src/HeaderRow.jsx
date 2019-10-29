import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeaderCheckMarkCell from './HeaderCheckMarkCell';
import HeaderChevronCell from './HeaderChevronCell';

import styles from './Table.module.scss';

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

const HeaderRow = ({
  children,
  refCallback,
  selectionStyle,
  ...customProps
}) => {
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
    <div
      className={`${cx(
        'header',
      )} ${customProps.className}`}
      role="rowgroup"
    >
      <div {...customProps} className={cx(['header-content'])} role="row">
        {checkmark}
        {children}
        {chevron}
      </div>
    </div>
  );
};

HeaderRow.propTypes = propTypes;
HeaderRow.defaultProps = defaultProps;

export default HeaderRow;
