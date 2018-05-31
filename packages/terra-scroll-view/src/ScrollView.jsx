import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ScrollView.scss';

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

const ScrollView = ({
  children,
  refCallback,
  ...customProps
}) => (
  <div {...customProps} className={cx(['scroll-view', customProps.className])} ref={refCallback}>
    {children}
  </div>
);

ScrollView.propTypes = propTypes;

export default ScrollView;
