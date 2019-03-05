import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './_OptGroup.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The group options.
   */
  children: PropTypes.node,
  /**
   * Whether the option group is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The group label.
   */
  label: PropTypes.node.isRequired,
};

const defaultProps = {
  disabled: false,
};

const OptGroup = ({ children, disabled, label }) => (
  <li className={cx('opt-group', { 'is-disabled': disabled })}>
    <div className={cx('label')}>
      {label}
    </div>
    <ul className={cx('options')}>
      {React.Children.map(children, child => (
        React.cloneElement(child, { disabled: disabled || !!child.props.disabled })))}
    </ul>
  </li>
);


OptGroup.propTypes = propTypes;
OptGroup.defaultProps = defaultProps;
OptGroup.isOptGroup = true;
OptGroup.displayName = 'OptGroup';

export default OptGroup;
