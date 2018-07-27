import React from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_PopperContainer.module.scss';

const cx = classNames.bind(styles);

const PopperContainer = ({ children }) => (
  <Portal>
    <div className={cx('popper-container')}>
      {children}
    </div>
  </Portal>
);

PopperContainer.propTypes = {
  children: PropTypes.node,
};

export default PopperContainer;
