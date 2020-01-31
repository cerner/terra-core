import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../Table.module.scss';

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
};

const defaultProps = {
  children: [],
};

const HeaderRow = ({
  children,
  refCallback,
  ...customProps
}) => (
  <div
    className={customProps.className ? `${cx('header')} ${customProps.className}` : cx('header')}
    role="rowgroup"
  >
    <div {...customProps} className={cx(['header-content'])} role="row">
      {children}
    </div>
  </div>
);

HeaderRow.propTypes = propTypes;
HeaderRow.defaultProps = defaultProps;

export default HeaderRow;
