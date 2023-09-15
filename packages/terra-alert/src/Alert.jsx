import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { v4 as uuidv4 } from 'uuid';

import ResponsiveElement from 'terra-responsive-element';
import Button from 'terra-button';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import {
  IconAlert,
  IconError,
  IconWarning,
  IconGapChecking,
  IconDiamondSymbol,
  IconInformation,
  IconSuccess,
} from 'terra-icon';
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
   * An action element to be added to the action section of the notification banner to give the user an easy way
   * to accomplish a task to resolve the notification.
   */
  action: PropTypes.element,
  /**
   * Child Nodes providing the message content for the notification banner. Can contain text and HTML.
   */
  children: PropTypes.node,
  /**
   * The icon to be used for a notification banner of type custom. This will not be used for any other notification types.
   */
  customIcon: PropTypes.element,
  /**
   * Sets an author-defined class, to control the status bar color to be used for a notification banner of type custom.
   *
   * ![IMPORTANT](https://badgen.net/badge//IMPORTANT/CSS?icon=github)
   * Adding `var(--my-app...` CSS variables is required for proper re-themeability when creating custom color styles _(see included examples)_.
   */
  customColorClass: PropTypes.string,
  /**
   * Disables the focus shift to Alert Notification Banners when action element is present.
   */
  disableAlertActionFocus: PropTypes.bool,
  /**
   * Callback function triggered when Dismiss button is clicked. The presence of this prop will cause the Dismiss button to be included on the notification banner.
   */
  onDismiss: PropTypes.func,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * The ARIA role attribute of the notification banner. If not provided, notification banner of type _alert_ will default to role `"alert"`,
   * all other notification banner types will use the role of `"status"`.
   */
  role: PropTypes.string,
  /**
   * The title for the notification banner which will be bolded.
   */
  title: PropTypes.string,
  /**
   * The type of notification banner to be rendered. One of `alert`, `error`, `warning`, `unsatisfied`, `unverified`, `advisory`,
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
  disableAlertActionFocus: false,
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
  disableAlertActionFocus,
  onDismiss,
  intl,
  role,
  title,
  type,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const [isNarrow, setIsNarrow] = useState();
  const alertBodyRef = useRef(null);

  const defaultTitle = type === AlertTypes.CUSTOM ? '' : intl.formatMessage({ id: `Terra.alert.${type}` });
  const defaultRole = type === AlertTypes.ALERT ? 'alert' : 'status';
  const isAlert = role === 'alert' || defaultRole === 'alert';
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

  const focusContainerClassName = cx('focus-container');
  const contentContainerClassName = cx('content-container');

  const alertId = uuidv4();
  const alertTitleId = `alert-title-${alertId}`;
  const alertMessageId = `alert-message-${alertId}`;

  const dismissButtonAriaDescribedBy = (title || defaultTitle) ? alertTitleId : alertMessageId;

  let dismissButton;
  if (onDismiss) {
    dismissButton = (
      <Button
        aria-describedby={dismissButtonAriaDescribedBy}
        text={intl.formatMessage({ id: 'Terra.alert.dismiss' })}
        onClick={onDismiss}
      />
    );
  }

  let actionsSection;
  if (onDismiss || action) {
    const actionsClassName = cx('actions', {
      'actions-custom': type === AlertTypes.CUSTOM,
    });
    actionsSection = (
      <>
        <div className={actionsClassName}>
          {action}
          {dismissButton}
        </div>
      </>
    );
  }

  const alertSectionClassName = cx('section', {
    'section-custom': type === AlertTypes.CUSTOM,
  });
  const alertMessageContent = (
    <div id={alertMessageId} className={alertSectionClassName}>
      {(title || defaultTitle) && (
        <strong id={alertTitleId} className={cx('title')}>
          {title && <VisuallyHiddenText text={`${defaultTitle},`} />}
          {title || defaultTitle}
        </strong>
      )}
      {children}
    </div>
  );

  useEffect(() => {
    // if the notification is an alert with an action element, focus the alert
    if (isAlert && action && !disableAlertActionFocus && alertBodyRef?.current?.focus) {
      alertBodyRef.current.focus();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ResponsiveElement
      onChange={(value) => {
        const showNarrowAlert = value === 'tiny';
        if (showNarrowAlert !== isNarrow) {
          setIsNarrow(showNarrowAlert);
        }
      }}
    >
      <div
        role={role || defaultRole}
        {...customProps}
        className={alertClassNames}
      >
        <div className={bodyClassNameForParent}>
          <div className={focusContainerClassName} ref={alertBodyRef} tabIndex="-1" />
          <div className={contentContainerClassName}>
            {getAlertIcon(type, customIcon)}
            {alertMessageContent}
          </div>
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

export default injectIntl(Alert);
