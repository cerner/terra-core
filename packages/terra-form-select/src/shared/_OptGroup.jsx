import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_OptGroup.module.scss';

const cx = classNamesBind.bind(styles);

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
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
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
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <li className={cx('opt-group', { 'is-disabled': disabled }, theme.className)} role="option" aria-selected="false">
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
};

OptGroup.propTypes = propTypes;
OptGroup.defaultProps = defaultProps;
OptGroup.isOptGroup = true;

export default injectIntl(OptGroup);
