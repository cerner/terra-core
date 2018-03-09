import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ActionFooterContainer.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: [],
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
    <div
      {...customProps}
      className={actionFooterContainerClassNames}
    >
      {children}
    </div>
  );
};

ActionFooterContainer.propTypes = propTypes;
ActionFooterContainer.defaultProps = defaultProps;

export default ActionFooterContainer;
