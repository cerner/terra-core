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
  children: undefined,
};

const ActionFooterContainer = ({
  children,
  ...customProps
}) => {
  const isEmpty = !React.Children.toArray(children).length;

  const actionFooterContainerClassNames = cx([
    'action-footer-container',
    { 'with-actions': !isEmpty },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={actionFooterContainerClassNames}>
      {children}
    </div>
  );
};

ActionFooterContainer.propTypes = propTypes;
ActionFooterContainer.defaultProps = defaultProps;

export default ActionFooterContainer;
