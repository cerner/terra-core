import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import { FormattedMessage } from 'react-intl';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconError from 'terra-icon/lib/icon/IconError';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconGapChecking from 'terra-icon/lib/icon/IconGapChecking';
import IconDiamondSymbol from 'terra-icon/lib/icon/IconDiamondSymbol';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconSuccess from 'terra-icon/lib/icon/IconSuccess';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Alert.module.scss';

const cx = classNamesBind.bind(styles);

const AlertTypes = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  UNSATISFIED: 'unsatisfied',
  UNVERIFIED: 'unverified',
  ADVISORY: 'advisory',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * An action element to be added to the action section of the alert to give the user an easy way
   * to accomplish a task to resolve the notification.
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
   * Sets an author-defined class, to control the status bar color to be used for an alert of type custom.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/CSS?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  customColorClass: PropTypes.string,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the alert.
   */
  onDismiss: PropTypes.func,
  /**
   * The title for the alert which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of alert to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified`, `advisory`,
   * `info`, `success`, or `custom`.
   */
  type: PropTypes.oneOf([
    AlertTypes.ALERT,
    AlertTypes.ERROR,
    AlertTypes.WARNING,
    AlertTypes.UNSATISFIED,
    AlertTypes.UNVERIFIED,
    AlertTypes.ADVISORY,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
    AlertTypes.CUSTOM,
  ]),
};

const defaultProps = {
  customColorClass: 'custom-default-color',
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
    case AlertTypes.UNSATISFIED:
      return (<span className={cx('icon', 'unsatisfied-icon')}><IconGapChecking /></span>);
    case AlertTypes.UNVERIFIED:
      return (<span className={cx('icon', 'unverified-icon')}><IconDiamondSymbol /></span>);
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

const Alert = ({
  action,
  children,
  customIcon,
  customColorClass,
  onDismiss,
  title,
  type,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const [isNarrow, setIsNarrow] = useState();

  const defaultTitle = type === AlertTypes.CUSTOM ? '' : <FormattedMessage id={`Terra.alert.${type}`} />;
  const alertClassNames = classNames(
    cx(
      'alert-base',
      type,
      { narrow: isNarrow },
      { wide: !isNarrow },
      theme.className,
    ),
    customProps.className,
    { [`${customColorClass}`]: customColorClass && type === AlertTypes.CUSTOM },
  );

  const bodyClassNameForParent = cx(
    'body',
    { 'body-std': !isNarrow || (isNarrow && !onDismiss && !action) },
    { 'body-narrow': isNarrow && (onDismiss || action) },
  );

  let dismissButton;
  if (onDismiss) {
    dismissButton = (
      <FormattedMessage id="Terra.alert.dismiss">
        {buttonText => (
          <Button text={buttonText} onClick={onDismiss} />
        )}
      </FormattedMessage>
    );
  }

  let actionsSection;
  if (onDismiss || action) {
    const actionsClassName = cx('actions', { 'actions-custom': type === AlertTypes.CUSTOM });
    actionsSection = (
      <div className={actionsClassName}>
        {action}
        {dismissButton}
      </div>
    );
  }

  const alertSectionClassName = cx('section', { 'section-custom': type === AlertTypes.CUSTOM });
  const alertMessageContent = (
    <div className={alertSectionClassName}>
      {(title || defaultTitle) && <strong className={cx('title')}>{title || defaultTitle}</strong>}
      {children}
    </div>
  );

  return (
    <ResponsiveElement
      onChange={(value) => {
        const showNarrowAlert = value === 'tiny';
        if (showNarrowAlert !== isNarrow) {
          setIsNarrow(showNarrowAlert);
        }
      }}
    >
      <div role="alert" {...customProps} className={alertClassNames}>
        <div className={bodyClassNameForParent}>
          {getAlertIcon(type, customIcon)}
          {alertMessageContent}
        </div>
        {actionsSection}
      </div>
    </ResponsiveElement>

  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
Alert.Opts = {};
Alert.Opts.Types = AlertTypes;

export default Alert;
