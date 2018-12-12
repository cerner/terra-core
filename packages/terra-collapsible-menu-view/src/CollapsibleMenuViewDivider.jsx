import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Menu from 'terra-menu';
import 'terra-base/lib/baseStyles';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const contextTypes = {
  isCollapsibleMenuItem: PropTypes.bool,
};

const CollapsibleMenuViewDivider = (props, { isCollapsibleMenuItem }) => {
  if (isCollapsibleMenuItem) {
    return <Menu.Divider />;
  }
  return <div className={cx(['divider', 'face-up-item'])} />;
};

CollapsibleMenuViewDivider.contextTypes = contextTypes;
export default CollapsibleMenuViewDivider;
