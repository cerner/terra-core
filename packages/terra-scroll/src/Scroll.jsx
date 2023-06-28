import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Scroll.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The child content to present in the scrollable region.
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the scrollable container.
   */
  refCallback: PropTypes.func,
};

const Scroll = ({
  children,
  refCallback,
  ...customProps
}) => (
  <div {...customProps} className={cx(['scroll', customProps.className])} ref={refCallback}>
    {children}
  </div>
);

Scroll.propTypes = propTypes;

export default Scroll;
