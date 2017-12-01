import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Menu from './_TabMenu';
import styles from './Tabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  activeKey: PropTypes.string,
  children: PropTypes.node,
};

const CollapsedTabs = props => (
  <div className={cx('collapsed-tabs-container')}>
    <Menu activeKey={props.activeKey}>
      {props.children}
    </Menu>
  </div>
);

CollapsedTabs.propTypes = propTypes;
export default CollapsedTabs;
