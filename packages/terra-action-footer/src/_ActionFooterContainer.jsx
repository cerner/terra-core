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
}) => {
  const isEmpty = !React.Children.count(children);

  const actionFooterContainerClassNames = cx([
    'action-footer-container',
    { 'is-empty': isEmpty },
    { 'has-children': !isEmpty },
    customProps.className,
  ]);

  return (isEmpty ?
    <div
      {...customProps}
      className={actionFooterContainerClassNames}
    />
    :
    <Spacer
      {...customProps}
      {...actionFooterPadding}
      className={actionFooterContainerClassNames}
    >
      {children}
    </Spacer>
  );
};

ActionFooterContainer.propTypes = propTypes;
ActionFooterContainer.defaultProps = defaultProps;

export default ActionFooterContainer;
