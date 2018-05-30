import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ScrollableContainer.scss';

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

const ScrollableContainer = ({
  children,
  refCallback,
  ...customProps
}) => (
  <div {...customProps} className={cx(['scrollable-container', customProps.className])} ref={refCallback}>
    {children}
  </div>
);

ScrollableContainer.propTypes = propTypes;

export default ScrollableContainer;
