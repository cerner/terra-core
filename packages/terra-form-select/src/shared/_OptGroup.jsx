import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames/bind';
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
   * @private
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * The group label.
   */
  label: PropTypes.node.isRequired,
};

const defaultProps = {
  disabled: false,
};

const OptGroup = ({
  children,
  disabled,
  intl,
  label,
}) => (
  <li className={cx('opt-group', { 'is-disabled': disabled })} role="group">
    <div className={cx('label')}>
      {label}
    </div>
    <ul className={cx('options')} role="listbox" aria-label={intl.formatMessage({ id: 'Terra.form.select.option' })}>
      {React.Children.map(children, child => (
        React.cloneElement(child, { disabled: disabled || !!child.props.disabled })
      ))}
    </ul>
  </li>
);


OptGroup.propTypes = propTypes;
OptGroup.defaultProps = defaultProps;
OptGroup.isOptGroup = true;

export default injectIntl(OptGroup);
