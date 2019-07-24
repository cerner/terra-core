import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
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

const OptGroup = ({
  children, disabled, label,
}) => (
  <li className={cx('opt-group', { 'is-disabled': disabled })} role="group">
    <div className={cx('label')}>
      {label}
    </div>
    <FormattedMessage id="Terra.form.select.option">
      {option => (
        <ul className={cx('options')} role="listbox" aria-label={option}>
          {React.Children.map(children, child => (
            React.cloneElement(child, { disabled: disabled || !!child.props.disabled })))}
        </ul>
      )}
    </FormattedMessage>
  </li>
);


OptGroup.propTypes = propTypes;
OptGroup.defaultProps = defaultProps;
OptGroup.isOptGroup = true;

export default OptGroup;
