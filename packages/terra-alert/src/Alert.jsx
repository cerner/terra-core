import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import 'terra-base/lib/baseStyles';
import styles from './Alert.scss';

const AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  GAP_CHECKING: 'gap_checking',
  OUTSIDE_RECORDS: 'outside_records',
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
   * The type of alert to be rendered. One of Alert.Types.ALERT, Alert.Types.ERROR, Alert.Types.WARNING, Alert.Types.ADVISORY,
   * Alert.Types.INFO, Alert.Types.SUCCESS, Alert.Types.GAP_CHECKING, Alert.Types.OUTSIDE_RECORDS, Alert.Types.CUSTOM.
   * Use the Types attribute of the Alert component for access to these type strings.
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

const getAlertClassName = (type) => {
  switch (type) {
    case AlertTypes.ALERT:
      return styles.alertType;
    case AlertTypes.ERROR:
      return styles.errorType;
    case AlertTypes.WARNING:
      return styles.warningType;
    case AlertTypes.ADVISORY:
      return styles.advisoryType;
    case AlertTypes.INFO:
      return styles.infoType;
    case AlertTypes.SUCCESS:
      return styles.successType;
    case AlertTypes.GAP_CHECKING:
      return styles.gapCheckingType;
    case AlertTypes.OUTSIDE_RECORDS:
      return styles.outsideRecordsType;
    case AlertTypes.CUSTOM:
      return styles.customType;
    default:
      return '';
  }
};

const getAlertIcon = (type, customIcon) => {
  switch (type) {
    case AlertTypes.ALERT:
      return (<IconAlert height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.ERROR:
      return (<IconError height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.WARNING:
      return (<IconWarning height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.ADVISORY:
      return null;
    case AlertTypes.INFO:
      return (<IconInformation height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.SUCCESS:
      return (<IconSuccess height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.GAP_CHECKING:
      return (<IconRequired height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.OUTSIDE_RECORDS:
      return (<IconDiamond height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

const getAlertDefaultTitle = (intl, type) => {
  let intlDefaultTitle = '';
  switch (type) {
    case AlertTypes.ALERT:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.alert' });
      break;
    case AlertTypes.ERROR:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.error' });
      break;
    case AlertTypes.WARNING:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.warning' });
      break;
    case AlertTypes.ADVISORY:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.advisory' });
      break;
    case AlertTypes.INFO:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.info' });
      break;
    case AlertTypes.SUCCESS:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.success' });
      break;
    case AlertTypes.GAP_CHECKING:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.gapChecking' });
      break;
    case AlertTypes.OUTSIDE_RECORDS:
      intlDefaultTitle = intl.formatMessage({ id: 'Terra.alert.outsideRecords' });
      break;
    default:
      break;
  }
  return intlDefaultTitle;
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
  const defaultTitle = getAlertDefaultTitle(intl, type);
  const attributes = Object.assign({}, customProps);
  const alertTypeClassName = getAlertClassName(type);
  const narrowAlertClassNames = classNames([
    styles.alert,
    styles.narrow,
    alertTypeClassName,
    attributes.className,
  ]);
  const wideAlertClassNames = classNames([
    styles.alert,
    styles.wide,
    alertTypeClassName,
    attributes.className,
  ]);

  let actionsSection = '';
  let dismissButton = '';
  const outerDivStyle = {};
  let alertSectionClassName = styles.section;
  let alertActionsClassName = styles.actions;

  if (type === AlertTypes.CUSTOM) {
    // For custom alert, there is no color assigned to the box-shadow style since it is to be specified
    // in the customStatusColor prop.  The box-shadow style is defined in CSS in order to get the
    // bidirectionality via the mixin.  As per the W3C spec if the box-shadow does not have the color
    // defined, it will use the prevailing color style, so setting that here. But then we need to set
    // the color style for the alert content so that it doesn't pick up the custom status color. We
    // will allow the icon to pick up the color style so that Terra icons will match the color of the
    // status bar.
    outerDivStyle.color = customStatusColor;
    alertSectionClassName = classNames([
      alertSectionClassName,
      styles.sectionCustom,
    ]);
    alertActionsClassName = classNames([
      alertActionsClassName,
      styles.actionsCustom,
    ]);
  }

  if (onDismiss) {
    dismissButton = (<Button text={intl.formatMessage({ id: 'Terra.alert.dismiss' })} size="medium" variant="secondary" onClick={onDismiss} />);
  }
  if (onDismiss || alertAction) {
    actionsSection = (
      <div className={alertActionsClassName}>
        {alertAction || ''}
        {dismissButton}
      </div>
    );
  }

  const alertMessageContent = (
    <div className={alertSectionClassName}>
      <strong className={styles.title}>{title || defaultTitle}</strong>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );

  return (
    <ResponsiveElement
      responsiveTo="parent"
      defaultElement={
        <div {...attributes} className={narrowAlertClassNames} style={outerDivStyle} >
          <div className={classNames([styles.body, styles.bodyNarrow])}>
            <div className={styles.icon}>{getAlertIcon(type, customIcon)}</div>
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
      }
      tiny={
        <div {...attributes} className={wideAlertClassNames} style={outerDivStyle} >
          <div className={classNames([styles.body, styles.bodyWide])}>
            <div className={styles.icon}>{getAlertIcon(type, customIcon)}</div>
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
Alert.Types = AlertTypes;

export default Alert;
