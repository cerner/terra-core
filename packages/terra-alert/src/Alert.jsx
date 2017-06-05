import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  REQUIRED: 'required',
  ADVISORY: 'advisory',
  CUSTOM: 'custom',
  INFORMATION: 'information',
  CONFIRMATION: 'confirmation',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert.
   */
  alertAction: PropTypes.element,
  /**
   * Child Nodes providing the message content for the alert. Can contain text and HTML.
   */
  children: PropTypes.PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
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
   * The type of alert to be rendered. One of AlertTypes.ALERT, AlertTypes.ERROR, AlertTypes.WARNING, AlertTypes.REQUIRED, AlertTypes.ADVISORY,
   * AlertTypes.INFORMATION, AlertTypes.CONFIRMATION, AlertTypes.CUSTOM.
   * Import AlertTypes for access to these type strings.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.REQUIRED,
    AlertTypes.ADVISORY,
    AlertTypes.CUSTOM,
    AlertTypes.INFORMATION,
    AlertTypes.CONFIRMATION,
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
    case AlertTypes.REQUIRED:
      return 'terra-Alert--required';
    case AlertTypes.ADVISORY:
      return 'terra-Alert--advisory';
    case AlertTypes.INFORMATION:
      return 'terra-Alert--information';
    case AlertTypes.CONFIRMATION:
      return 'terra-Alert--confirmation';
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
    case AlertTypes.REQUIRED:
      return (<IconRequired height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.ADVISORY:
      return (<IconDiamond height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.INFORMATION:
      return (<IconInformation height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.CONFIRMATION:
      return (<IconSuccess height="1.3333rem" width="1.3333rem" />);
    case AlertTypes.CUSTOM:
      return customIcon;
    default:
      return null;
  }
};

const getDefaultTitle = (type) => {
  switch (type) {
    case AlertTypes.ALERT:
      return 'Alert!';
    case AlertTypes.ERROR:
      return 'Error!';
    case AlertTypes.WARNING:
      return 'Warning!';
    case AlertTypes.REQUIRED:
      return 'Required!';
    case AlertTypes.ADVISORY:
      return 'Advisory!';
    case AlertTypes.INFORMATION:
      return 'Information!';
    case AlertTypes.CONFIRMATION:
      return 'Confirmed!';
    default:
      return '';
  }
};

const Alert = ({ type, children, title, customIcon, customStatusColor, onDismiss, alertAction, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const alertTypeClassName = getAlertClassName(type);
  const AlertClassNames = classNames([
    'terra-Alert',
    alertTypeClassName,
    attributes.className,
  ]);

  let actionsSection = '';
  let dismissButton = '';
  const outerDivStyle = {};
  let customBoxShadowStyle = '2px 0 0 ';

  if (type === AlertTypes.CUSTOM) {
    customBoxShadowStyle += customStatusColor;
    customBoxShadowStyle += ' inset';
    outerDivStyle.boxShadow = customBoxShadowStyle;
  }

  if (onDismiss) {
    dismissButton = (<Button text="Dismiss" size="medium" variant="secondary" onClick={onDismiss} />);
  }
  if (onDismiss || alertAction) {
    actionsSection = (
      <div className="terra-Alert-actions">
        {alertAction || ''}
        {dismissButton}
      </div>
    );
  }

  return (
    <div {...attributes} className={AlertClassNames} style={outerDivStyle} >
      <div className="terra-Alert-body">
        <div className="terra-Alert-icon">{getAlertIcon(type, customIcon)}</div>
        <div className="terra-Alert-section"><strong className="terra-Alert-title">{title || getDefaultTitle(type)}</strong>
          <div className="terra-Alert-content">
            {children}
          </div>
        </div>
      </div>
      {actionsSection}
    </div>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export { AlertTypes };
export default Alert;
