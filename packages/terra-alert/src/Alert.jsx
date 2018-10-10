import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Alert.module.scss';

const cx = classNames.bind(styles);

const AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  action: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for an alert of type custom. This will not be used for any other alert types.
   */
  customIcon: PropTypes.element,
  /**
   * The status bar color to be used for an alert of type custom.
   */
  customStatusColor: PropTypes.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `advisory`,
   * `info`, `success`, `custom`.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.ADVISORY,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
    AlertTypes.CUSTOM,
  ]),
};

const defaultProps = {
  action: null,
  children: '',
  customIcon: null,
  customStatusColor: '',
  onDismiss: null,
  title: '',
  type: AlertTypes.ALERT,
};

const getAlertIcon = (type, customIcon) => {
  switch (type) {
    case AlertTypes.ALERT:
      return (<span className={cx('icon')}><IconAlert /></span>);
    case AlertTypes.ERROR:
      return (<span className={cx('icon')}><IconError /></span>);
    case AlertTypes.WARNING:
      return (<span className={cx('icon')}><IconWarning /></span>);
    case AlertTypes.ADVISORY:
      return null;
    case AlertTypes.INFO:
      return (<span className={cx('icon')}><IconInformation /></span>);
    case AlertTypes.SUCCESS:
      return (<span className={cx('icon')}><IconSuccess /></span>);
    case AlertTypes.CUSTOM:
      return (<span className={cx('icon')}>{customIcon}</span>);
    default:
      return null;
  }
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

const Alert = ({
  type,
  children,
  title,
  customIcon,
  customStatusColor,
  onDismiss,
  action,
  ...customProps
}, {
  intl,
}) => {
  const defaultTitle = type === AlertTypes.CUSTOM ? '' : intl.formatMessage({ id: `Terra.alert.${type}` });
  const attributes = Object.assign({}, customProps);
  const narrowAlertClassNames = cx([
    'alert-base',
    type,
    'narrow',
    attributes.className,
  ]);
  const wideAlertClassNames = cx([
    'alert-base',
    type,
    'wide',
    attributes.className,
  ]);

  let actionsSection = '';
  let dismissButton = '';
  const outerDivStyle = {};
  let alertSectionClassName = cx('section');
  let actionsClassName = cx('actions');
  let bodyClassNameForNarrowParent = cx(['body', 'body-std']);

  if (type === AlertTypes.CUSTOM) {
    // For custom alert, there is no color assigned to the box-shadow style since it is to be specified
    // in the customStatusColor prop.  The box-shadow style is defined in CSS in order to get the
    // bidirectionality via the mixin.  As per the W3C spec if the box-shadow does not have the color
    // defined, it will use the prevailing color style, so setting that here. But then we need to set
    // the color style for the alert content so that it doesn't pick up the custom status color. We
    // will allow the icon to pick up the color style so that Terra icons will match the color of the
    // status bar.
    outerDivStyle.color = customStatusColor;
    alertSectionClassName = cx(['section', 'section-custom']);
    actionsClassName = cx(['actions', 'actions-custom']);
  }

  if (onDismiss) {
    dismissButton = (<Button text={intl.formatMessage({ id: 'Terra.alert.dismiss' })} onClick={onDismiss} />);
  }
  if (onDismiss || action) {
    bodyClassNameForNarrowParent = cx(['body', 'body-narrow']);
    actionsSection = (
      <div className={actionsClassName}>
        {action}
        {dismissButton}
      </div>
    );
  }

  const alertMessageContent = (
    <p className={alertSectionClassName}>
      {(title || defaultTitle) && <strong className={cx('title')}>{title || defaultTitle}</strong>}
      {children}
    </p>
  );

  return (
    <ResponsiveElement
      responsiveTo="parent"
      defaultElement={(
        <div {...attributes} className={narrowAlertClassNames} style={outerDivStyle}>
          <div className={bodyClassNameForNarrowParent}>
            {getAlertIcon(type, customIcon)}
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
)}
      tiny={(
        <div {...attributes} className={wideAlertClassNames} style={outerDivStyle}>
          <div className={cx(['body', 'body-std'])}>
            {getAlertIcon(type, customIcon)}
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
)}
    />

  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.contextTypes = contextTypes;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

export default Alert;
