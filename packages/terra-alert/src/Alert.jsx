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
 /*
 * The type of alert to be rendered.
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
  ]).isRequired,
 /*
 * Child Nodes providing the message content for the alert.
 */
  children: PropTypes.PropTypes.oneOfType([PropTypes.node.isRequired, PropTypes.string.isRequired]),
 /*
 * The title for the alert which will be bolded.
 */
  title: PropTypes.string,
 /*
 * The icon to be used for an alert of type custom.
 */
  customIcon: PropTypes.element,
 /*
 * The status bar color to be used for an alert of type custom.
 */
  customStatusColor: PropTypes.string,
 /*
 * Indicates whether the Alert is dismissible.  If so, a dismiss button is added to the action area of the alert.
 */
  isDismissible: PropTypes.bool,
 /*
 * An action element to be added to the action section of the alert.
 */
  alertAction: PropTypes.element,
};

const defaultProps = {
  children: '',
  title: '',
  customIcon: null,
  customStatusColor: '',
  isDismissible: false,
  alertAction: null,
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

const Alert = ({ type, children, title, customIcon, customStatusColor, isDismissible, alertAction, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const alertTypeClassName = getAlertClassName(type);
  const AlertClassNames = classNames([
    'terra-Alert',
    alertTypeClassName,
    attributes.className,
  ]);

  const outerDivStyle = {};
  if (type === AlertTypes.CUSTOM) {
    let customBoxShadowStyle = '2px 0 0 ';
    customBoxShadowStyle += customStatusColor;
    customBoxShadowStyle += ' inset';
    outerDivStyle.boxShadow = customBoxShadowStyle;
  }

  let actionsSection = '';
  let dismissButton = '';
  if (isDismissible) {
    dismissButton = (<Button text="Dismiss" size="medium" variant="secondary" />);
  }
  if (isDismissible || alertAction) {
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
