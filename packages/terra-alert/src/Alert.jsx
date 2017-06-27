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
import './Alert.scss';

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
      return 'terra-Alert--alert';
    case AlertTypes.ERROR:
      return 'terra-Alert--error';
    case AlertTypes.WARNING:
      return 'terra-Alert--warning';
    case AlertTypes.ADVISORY:
      return 'terra-Alert--advisory';
    case AlertTypes.INFO:
      return 'terra-Alert--info';
    case AlertTypes.SUCCESS:
      return 'terra-Alert--success';
    case AlertTypes.GAP_CHECKING:
      return 'terra-Alert--gap-checking';
    case AlertTypes.OUTSIDE_RECORDS:
      return 'terra-Alert--outside-records';
    case AlertTypes.CUSTOM:
      return 'terra-Alert--custom';
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
  let defaultTitle = '';
  switch (type) {
    case AlertTypes.ALERT:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.alert' });
      break;
    case AlertTypes.ERROR:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.error' });
      break;
    case AlertTypes.WARNING:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.warning' });
      break;
    case AlertTypes.ADVISORY:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.advisory' });
      break;
    case AlertTypes.INFO:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.info' });
      break;
    case AlertTypes.SUCCESS:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.success' });
      break;
    case AlertTypes.GAP_CHECKING:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.gapChecking' });
      break;
    case AlertTypes.OUTSIDE_RECORDS:
      defaultTitle = intl.formatMessage({ id: 'Terra.alert.outsideRecords' });
      break;
    default:
      break;
  }
  const attributes = Object.assign({}, customProps);
  const alertTypeClassName = getAlertClassName(type);
  const narrowAlertClassNames = classNames([
    'terra-Alert',
    'terra-Alert--narrow',
    alertTypeClassName,
    attributes.className,
  ]);
  const wideAlertClassNames = classNames([
    'terra-Alert',
    'terra-Alert--wide',
    alertTypeClassName,
    attributes.className,
  ]);

  let actionsSection = '';
  let dismissButton = '';
  const outerDivStyle = {};
  let alertSectionClassName = 'terra-Alert-section';
  let alertActionsClassName = 'terra-Alert-actions';

  if (type === AlertTypes.CUSTOM) {
    // For custom alert, there is no color assigned to the box-shadow style since it is to be specified
    // in the customStatusColor prop.  The box-shadow style is defined in CSS in order to get the
    // bidirectionality via the mixin.  As per the W3C spec if the box-shadow does not have the color
    // defined, it will use the prevailing color style, so setting that here. But then we need to set
    // the color style for the alert content so that it doesn't pick up the custom status color. We
    // will allow the icon to pick up the color style so that Terra icons will match the color of the
    // status bar.
    outerDivStyle.color = customStatusColor;
    alertSectionClassName += ' terra-Alert-section--custom';
    alertActionsClassName += ' terra-Alert-actions--custom';
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
      <strong className="terra-Alert-title">{title || defaultTitle}</strong>
      <div className="terra-Alert-content">
        {children}
      </div>
    </div>
  );

  return (
    <ResponsiveElement
      responsiveTo="parent"
      defaultElement={
        <div {...attributes} className={narrowAlertClassNames} style={outerDivStyle} >
          <div className="terra-Alert-body terra-Alert-body-narrow">
            <div className="terra-Alert-icon">{getAlertIcon(type, customIcon)}</div>
            {alertMessageContent}
          </div>
          {actionsSection}
        </div>
      }
      tiny={
        <div {...attributes} className={wideAlertClassNames} style={outerDivStyle} >
          <div className="terra-Alert-body terra-Alert-body-wide">
            <div className="terra-Alert-icon">{getAlertIcon(type, customIcon)}</div>
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
