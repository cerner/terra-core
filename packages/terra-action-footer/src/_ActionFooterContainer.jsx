import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Spacer from 'terra-spacer';
import 'terra-base/lib/baseStyles';
import styles from './ActionFooterContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
};

const actionFooterPadding = {
  paddingTop: 'small-1',
  paddingRight: 'small-1',
  paddingBottom: 'small-1',
  paddingLeft: 'small-1',
};

const ActionFooterContainer = ({
  children,
  ...customProps
}) => (
  <Spacer {...actionFooterPadding} className={cx('action-footer-container', customProps.className)}>
    {children}
  </Spacer>
);

ActionFooterContainer.propTypes = propTypes;
ActionFooterContainer.defaultProps = defaultProps;

export default ActionFooterContainer;
