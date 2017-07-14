import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Alert.scss';

const cx = classNames.bind(styles);

const AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  GAP_CHECKING: 'gapChecking',
  OUTSIDE_RECORDS: 'outsideRecords',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  alertAction: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for an alert of type custom.
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
   * The type of alert to be rendered. One of Alert.Opts.Types.ALERT, Alert.Opts.Types.ERROR, Alert.Opts.Types.WARNING, Alert.Opts.Types.ADVISORY,
   * Alert.Opts.Types.INFO, Alert.Opts.Types.SUCCESS, Alert.Opts.Types.GAP_CHECKING, Alert.Opts.Types.OUTSIDE_RECORDS, Alert.Opts.Types.CUSTOM.
   * Use the Alert.Opts.Types attribute of the Alert component for access to these type strings.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.ADVISORY,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
    AlertTypes.GAP_CHECKING,
    AlertTypes.OUTSIDE_RECORDS,
    AlertTypes.CUSTOM,
  ]),
};

const defaultProps = {
  alertAction: null,
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
      return (<IconAlert className={cx('alertIcon')} />);
    case AlertTypes.ERROR:
      return (<IconError className={cx('alertIcon')} />);
    case AlertTypes.WARNING:
      return (<IconWarning className={cx('alertIcon')} />);
    case AlertTypes.ADVISORY:
      return null;
    case AlertTypes.INFO:
      return (<IconInformation className={cx('alertIcon')} />);
    case AlertTypes.SUCCESS:
      return (<IconSuccess className={cx('alertIcon')} />);
    case AlertTypes.GAP_CHECKING:
      return (<IconRequired className={cx('alertIcon')} />);
    case AlertTypes.OUTSIDE_RECORDS:
      return (<IconDiamond className={cx('alertIcon')} />);
    case AlertTypes.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const Alert = (
  {
    type,
    children,
    title,
    customIcon,
    customStatusColor,
    onDismiss,
    alertAction,
    ...customProps
  }, {
    intl,
  },
) => {
  const defaultTitle = type === AlertTypes.CUSTOM ? '' : intl.formatMessage({ id: `Terra.alert.${type}` });
  const attributes = Object.assign({}, customProps);
  const narrowAlertClassNames = cx([
    type,
    'narrow',
    attributes.className,
  ]);
  const wideAlertClassNames = cx([
    type,
    'wide',
    attributes.className,
  ]);

  let actionsSection = '';
  let dismissButton = '';
  const outerDivStyle = {};
  let alertSectionClassName = cx('section');
  let alertActionsClassName = cx('actions');
  let bodyClassNameForNarrowParent = 'bodyStd';

  if (type === AlertTypes.CUSTOM) {
    // For custom alert, there is no color assigned to the box-shadow style since it is to be specified
    // in the customStatusColor prop.  The box-shadow style is defined in CSS in order to get the
    // bidirectionality via the mixin.  As per the W3C spec if the box-shadow does not have the color
    // defined, it will use the prevailing color style, so setting that here. But then we need to set
    // the color style for the alert content so that it doesn't pick up the custom status color. We
    // will allow the icon to pick up the color style so that Terra icons will match the color of the
    // status bar.
    outerDivStyle.color = customStatusColor;
    alertSectionClassName = cx(['sectionCustom']);
    alertActionsClassName = cx(['actionsCustom']);
  }

  if (onDismiss) {
    dismissButton = (<Button text={intl.formatMessage({ id: 'Terra.alert.dismiss' })} size="medium" variant="secondary" onClick={onDismiss} />);
  }
  if (onDismiss || alertAction) {
    bodyClassNameForNarrowParent = 'bodyNarrow';
    actionsSection = (
      <div className={alertActionsClassName}>
        {alertAction}
        {dismissButton}
      </div>
    );
  }

  const alertMessageContent = (
    <div className={alertSectionClassName}>
      <strong className={cx('title')}>{title || defaultTitle}</strong>
      <div className={cx('content')}>
        {children}
      </div>
    </div>
  );

  return (
    <ResponsiveElement
      responsiveTo="parent"
      defaultElement={
        <div {...attributes} className={narrowAlertClassNames} style={outerDivStyle} >
          <div className={cx(bodyClassNameForNarrowParent)}>
            <div className={cx('icon')}>{getAlertIcon(type, customIcon)}</div>
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
      }
      tiny={
        <div {...attributes} className={wideAlertClassNames} style={outerDivStyle} >
          <div className={cx('bodyStd')}>
            <div className={cx('icon')}>{getAlertIcon(type, customIcon)}</div>
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
      }
    />

  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.contextTypes = contextTypes;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

export default Alert;
